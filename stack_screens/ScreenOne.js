import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ScreenOne = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Tabs", { screen: "MyPage" })}>
    <Text style={{ fontSize: 50 }}>Go to Mypage</Text>
  </TouchableOpacity>
);

export default ScreenOne;
