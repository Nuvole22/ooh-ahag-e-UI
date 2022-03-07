import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ScreenTwo = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Search" })}>
    <Text style={{ fontSize: 50 }}>Screen Two, go Search</Text>
  </TouchableOpacity>
);

export default ScreenTwo;
