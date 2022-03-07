import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Text, Image, useColorScheme } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import RootNav from "./navigation/Root";

export default function App() {
  // const [ready, setReady] = useState(false);
  const [assets] = useAssets([require("./icon.png")]);
  const [fontLoaded] = Font.useFonts(Ionicons.font);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const isDark = useColorScheme() === "dark";

  if (!assets || !fontLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <RootNav />
    </NavigationContainer>
  );
}
