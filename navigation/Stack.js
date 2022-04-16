import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import PostWrite from "../stack_screens/PostWrite";
import ScreenTwo from "../stack_screens/ScreenTwo";
import ScreenThree from "../stack_screens/ScreenThree";
import Login from "../screens/Login";
import { DARKGREY_COLOR } from "../color";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  // const isDark = useColorScheme() === "dark";
  /* 테스트용으로 전부 darkTheme, 후에 위 주석 해제 필요 */
  const isDark = true;
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? DARKGREY_COLOR : "white",
        },
        headerTitleStyle: { color: isDark ? "white" : DARKGREY_COLOR },
      }}
    >
      {/* <NativeStack.Screen name="Login" component={Login} /> */}
      <NativeStack.Screen name="PostWrite" component={PostWrite} />
      <NativeStack.Screen name="Two" component={ScreenTwo} />
      <NativeStack.Screen name="Three" component={ScreenThree} options={{}} />
    </NativeStack.Navigator>
  );
};

export default Stack;
