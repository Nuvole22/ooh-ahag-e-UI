import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const MyPage = ({ navigation: { navigate } }) => (
  <TouchableOpacity
    onPress={() => navigate("Stack", { screen: "Two" })}
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <Text>MyPage</Text>
  </TouchableOpacity>
);

export default MyPage;
