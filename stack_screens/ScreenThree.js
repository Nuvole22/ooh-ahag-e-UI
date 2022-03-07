import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ScreenThree = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Home" })}>
    <Text style={{ fontSize: 50 }}>Screen Three, go Home</Text>
  </TouchableOpacity>
);

export default ScreenThree;
