import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import Login from "../screens/Login";
import SignUpSelect from "../screens/SignUpSelect";
import SignUp from "../screens/SignUp";

const NativeStack = createNativeStackNavigator();

const LoginStack = () => (
  <NativeStack.Navigator screenOptions={{}}>
    <NativeStack.Screen name="Login" component={Login} />
    <NativeStack.Screen name="SignUpSelect" component={SignUpSelect} />
    <NativeStack.Screen name="SignUp" component={SignUp} />
  </NativeStack.Navigator>
);

export default LoginStack;
