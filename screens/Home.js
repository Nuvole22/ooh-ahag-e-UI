import React, { useState, useEffect } from "react";
import {
  Dimensions,
  FlatList,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { useQuery, useQueryClient, useInfiniteQuery } from "react-query";
import styled from "styled-components/native";
import { moviesApi } from "./../utils/api";
import { Ionicons } from "@expo/vector-icons";
import Loader from "./../components/Loader";
import HMedia from "../components/HMedia";

const ListTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
`;

const CommingSoonTitle = styled(ListTitle)`
  margin-bottom: 30px;
`;

const HSeparator = styled.View`
  height: 10px;
`;

const Home = ({ navigation: { navigate, setOptions } }) => {
  const [refreshing, setRefreshing] = useState(false);
  const queryClient = useQueryClient();
  const { isLoading: nowPlayingLoading, data: nowPlayingData } = useQuery(
    ["movies", "nowPlaying"],
    moviesApi.nowPlaying
  );
  const {
    isLoading: upcomingLoading,
    data: upcomingData,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(["movies", "upcoming"], moviesApi.upcoming, {
    // getNextPageParam을 쓰면 api에서 pageParam 인자를 받을 수 있고, 이를 api에 그대로 넘겨주면 된다. 이번의 경우 moviesApi.upcoming에 이걸 활용함.
    getNextPageParam: (currentPage) => {
      //인자는 2개를 받을 수 있음. (현재 페이지, 페이지 모두) Movie API는 이게 잘 구현되어 있어서 인자 1개로 한다고 함.
      if (currentPage.page + 1 > currentPage.total_pages) {
        return null;
      }
      return currentPage.page + 1;
    },
  });
  const renderHMedia = ({ item }) => (
    <HMedia
      poster_path={item.poster_path}
      original_title={item.original_title}
      release_date={item.release_date}
      overview={item.overview}
      fullData={item}
    />
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.refetchQueries(["movies"]);
    setRefreshing(false);
  };

  const loading = upcomingLoading;

  const loadMore = (hasNextPage) => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  const movieKeyExtractor = (item) => {
    return item.id;
  };

  const WriteBtn = () => (
    <TouchableOpacity
      onPress={() => navigate("Stack", { screen: "one" })} //네비게이터간 이동은 ROOT에서 지정한 네비게이터 이름과 스크린명을 모두 지정해줘야 함
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
      }}
    >
      <Ionicons name="add-outline" size={24} color="white" />
    </TouchableOpacity>
  );

  useEffect(() => {
    setOptions({
      headerRight: () => <WriteBtn />,
    });
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <FlatList
      onEndReached={loadMore} /* 무한스크롤 - function 실행 */
      // onEndReachedThreshold={0.4} /* 무한스크롤 - function 실행할 시점 설정 */
      refreshing={refreshing}
      onRefresh={onRefresh}
      ListHeaderComponent={
        <>{/* <CommingSoonTitle>Coming Soon</CommingSoonTitle> */}</>
      }
      data={upcomingData.pages.map((page) => page.results).flat()}
      keyExtractor={movieKeyExtractor}
      ItemSeparatorComponent={HSeparator}
      renderItem={renderHMedia}
    />
  );
};

export default Home;
