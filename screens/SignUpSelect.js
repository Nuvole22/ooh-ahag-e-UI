import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Button,
  Image,
  Alert,
} from "react-native";
import styled from "styled-components/native";
import { DARKGREY_COLOR } from "../color";
import { Ionicons } from "@expo/vector-icons";

const SocialContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  height: 55px;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const SocialBtn = styled.TouchableOpacity`
  align-items: flex-end;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
`;

const SocialText = styled.Text`
  text-align: center;
  font-size: 30px;
`;

const Hr = styled.View`
  border-bottom-color: black;
  border-bottom-width: 1px;
  margin-bottom: 15px;
`;

const SignUpSelect = ({ navigation: { navigate } }) => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      {/* <Image source={require("../icon.png")} style={styles.logo} />
      <View style={styles.titleArea}>
        <Text style={styles.title}>회원가입</Text>
      </View> */}
      <SocialText>SNS 계정으로 회원가입</SocialText>

      <SocialContainer>
        <SocialBtn onPress={() => alert("Google SignUp")}>
          <Ionicons name="logo-google" size={50} color="black" />
        </SocialBtn>
        <SocialBtn onPress={() => alert("Facebook SignUp")}>
          <Ionicons name="logo-facebook" size={50} color="black" />
        </SocialBtn>
        <SocialBtn onPress={() => alert("Apple SignUp")}>
          <Ionicons name="logo-apple" size={50} color="black" />
        </SocialBtn>
      </SocialContainer>

      <Hr />

      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Alert.alert("회원가입 이벤트", "회원가입 OnPress ^^");
            navigate("LoginStack", { screen: "SignUp" });
          }}
        >
          <Text style={styles.buttonTitle}>이메일로 가입하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpSelect;

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
    padding: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: "10%",
    paddingRight: "10%",
    justifyContent: "center",
  },
  titleArea: {
    width: "100%",
    padding: "5%",
    alignItems: "center",
    // backgroundColor: "blue",
  },
  title: {
    fontSize: 20,
  },
  formArea: {
    width: "100%",
    height: "15%",
    // backgroundColor: "green",
    // paddingBottom: "2%",
  },
  textForm: {
    borderWidth: 1,
    borderColor: "#888",
    width: "100%",
    height: "30%",
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
  },
  buttonArea: {
    // backgroundColor: "yellow",
    width: "100%",
    height: "5%",
  },
  button: {
    backgroundColor: "#46c3ad",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    color: "white",
  },
});
