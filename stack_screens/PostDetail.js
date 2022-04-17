import React, { useState, useEffect } from "react";
import { Dimensions, Text, View } from "react-native";
import styled from "styled-components/native";
import { DARKGREY_COLOR } from "../color";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const WholeContainer = styled.ScrollView`
  background-color: white;
  padding-left: 10%;
  padding-right: 10%;
`;

const TxtTitleContainer = styled.View`
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 20px;
`;

const TxtTitle = styled.Text`
  font-size: 24px;
`;

const TxtNickname = styled.Text`
  font-size: 14px;
`;

const TxtInputContainer = styled.View`
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 20px;
`;

const TxtInput = styled.Text`
  font-size: 20px;
`;

const Hr = styled.View`
  border-bottom-color: black;
  border-bottom-width: 1px;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const BtnTouchable = styled.TouchableOpacity`
  background-color: #46c3ad;
  width: 45%;
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left: 2px;
  margin-right: 2px;
`;

const BtnContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const PostWrite = ({
  navigation: { navigate, setOptions },
  route: { params },
}) => {
  const [postTitle, setPostTitle] = useState("");
  const [postContents, setPostContents] = useState("");
  const [postLike, setPostLike] = useState(params.postLike);
  const [postLikeCnt, setPostLikeCnt] = useState(params.postLikeCnt);
  const [postCommentCnt, setPostCommentCnt] = useState(params.postCommentCnt);

  const onPressLike = () => {
    //TODO : 좋아요, 좋아요 취소시 API 전송 추가 필요
    if (postLike) {
      setPostLike(false);
      setPostLikeCnt(postLikeCnt - 1);
    } else {
      setPostLike(true);
      setPostLikeCnt(postLikeCnt + 1);
    }
  };
  const onPressComment = () => {};

  const ShareButton = () => (
    <TouchableOpacity onPress={onShareBtn}>
      <Ionicons name="share-outline" color="white" size={24} />
    </TouchableOpacity>
  );

  const onShareBtn = () => {
    //TODO : 공유하기 이벤트 추가
    alert("공유하기 버튼 이벤트");
    console.log(params);
  };

  //TODO : 화면 로딩시 권한 있는 게시판 목록 API로 가져오기, 기본값 세팅해주기(boardSelect)
  useEffect(() => {
    setOptions({
      title: "original_title" in params ? "@게시판명@" : "@게시판명@",
      headerRight: () => <ShareButton />,
    });
    if (params) {
      setPostTitle(params.original_title);
      setPostContents(params.overview);
    }
  }, [params]);

  return (
    <WholeContainer>
      <TxtTitleContainer>
        <TxtTitle> {postTitle} </TxtTitle>
        <TxtNickname> {params.title} (닉네임자리) </TxtNickname>
        <TxtNickname> {params.release_date} </TxtNickname>
      </TxtTitleContainer>
      <Hr />
      <TxtInputContainer>
        <TxtInput> {postContents} </TxtInput>
      </TxtInputContainer>
      <Hr />
      <BtnContainer>
        <BtnTouchable onPress={onPressLike}>
          {postLike ? (
            <Ionicons name="heart" size={20} color="black" />
          ) : (
            <Ionicons name="heart-outline" size={20} color="black" />
          )}
          <Text> {postLikeCnt}</Text>
        </BtnTouchable>
        <BtnTouchable onPress={onPressComment}>
          <Ionicons
            name="md-chatbox-ellipses-outline"
            size={20}
            color="black"
          />
          <Text> 0</Text>
        </BtnTouchable>
      </BtnContainer>
      <Hr />
    </WholeContainer>
  );
};

export default PostWrite;
