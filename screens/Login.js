import React, { useState } from "react";
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
import { Ionicons } from "@expo/vector-icons";
import { LoginApi } from "../utils/login/LoginAPI";

const Login = ({ navigation: { navigate } }) => {
  const [text, setText] = useState("asd");
  const [number, setNumber] = useState("123");

  const [isLoading, setLoading] = useState(false);

  const onChangeText = (event) => {
    setText(event);
  };
  const onChangeNumber = (event) => {
    setNumber(event);
  };
  const getLoginAPI = async (params) => {
    try {
      setLoading(true);

      const resApi = await LoginApi.GetLoginInfo(params);

      let res = JSON.stringify(resApi);

      console.log("[LOG] resApi : " + res);

      if (resApi.data.success === true) {
        Alert.alert(
          "success login",
          "Login 성공! ID : " +
            resApi.data.content.userId +
            "PW : " +
            resApi.data.content.pw
        );
        navigate("Tabs", { screen: "Home" });
      } else {
        Alert.alert(
          "wrong id pw",
          "ID : " +
            resApi.data.content.userId +
            "PW : " +
            resApi.data.content.pw
        );
      }

      setLoading(false);
    } catch (error) {
      Alert.alert("로그인 정보를 가져올 수 없습니다.");

      console.log("[LOG] error : " + error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../icon.png")} style={styles.logo} />
      <View style={styles.titleArea}>
        <Text style={styles.title}>우아학ㅔ</Text>
      </View>
      <View style={styles.titleArea}>
        <Text style={styles.title}>
          {isLoading === true ? "Loading" : "Completed"}
        </Text>
      </View>
      <View style={styles.formArea}>
        <TextInput
          style={styles.textForm}
          placeholder={"ID(asd)"}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.textForm}
          placeholder={"Password(123)"}
          onChangeText={onChangeNumber}
          value={number}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigate("LoginStack", { screen: "SignUpSelect" });
          }}
        >
          <Text style={styles.buttonTitle}>회원가입</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (isLoading === false) {
              getLoginAPI({ userId: text, pw: number });
            } else {
              console.log("[LOG] 로딩중입니다.");
            }
          }}
        >
          <Text style={styles.buttonTitle}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
    marginBottom: 5,
  },
  buttonTitle: {
    color: "white",
  },
});
