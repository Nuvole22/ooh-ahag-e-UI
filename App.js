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
import { QueryClient, QueryClientProvider } from "react-query";
import { darkTheme, lightTheme } from "./styled";
import { ThemeProvider } from "styled-components";

export default function App() {
  // const [ready, setReady] = useState(false);
  const [assets] = useAssets([require("./icon.png")]);
  const [fontLoaded] = Font.useFonts(Ionicons.font);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const queryClient = new QueryClient();

  const isDark = useColorScheme() === "dark";

  if (!assets || !fontLoaded) {
    return <AppLoading />;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        theme={
          isDark
            ? darkTheme
            : darkTheme /* 테스트용으로 전부 darkTheme, 후에 lightTheme으로 수정 필요 */
        }
      >
        <NavigationContainer>
          <RootNav />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
