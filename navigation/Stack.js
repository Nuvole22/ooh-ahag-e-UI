import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import ScreenOne from "../stack_screens/ScreenOne";
import ScreenTwo from "../stack_screens/ScreenTwo";
import ScreenThree from "../stack_screens/ScreenThree";
import Login from "../screens/Login";

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator screenOptions={{}}>
    {/* <NativeStack.Screen name="Login" component={Login} /> */}
    <NativeStack.Screen name="One" component={ScreenOne} />
    <NativeStack.Screen name="Two" component={ScreenTwo} />
    <NativeStack.Screen name="Three" component={ScreenThree} options={{}} />
  </NativeStack.Navigator>
);

export default Stack;
