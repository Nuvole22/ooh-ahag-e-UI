import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const Home = ({ navigation: { navigate } }) => (
  <TouchableOpacity
    onPress={() => navigate("Stack", { screen: "one" })} //네비게이터간 이동은 ROOT에서 지정한 네비게이터 이름과 스크린명을 모두 지정해줘야 함
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <Text>Home</Text>
  </TouchableOpacity>
);

export default Home;
