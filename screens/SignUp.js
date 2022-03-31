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
import { Ionicons } from "@expo/vector-icons";

const Login = ({ navigation: { navigate } }) => {
  const [text, setText] = useState("asd");
  const [number, setNumber] = useState("123");

  const [resText, setResText] = useState("");

  const apiTest = () => {
    fetch("http://13.125.219.60:8080/api/test")
      .then((res) => res.json)
      .then((data) => console.log(data));

    fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
      console.log(res)
    );
  };

  useEffect(() => {
    apiTest();
  }, []);

  const onChangeText = (event) => {
    setText(event);
  };
  const onChangeNumber = (event) => {
    setNumber(event);
  };
  return (
    <View style={styles.container}>
      <Image source={require("../icon.png")} style={styles.logo} />
      <Text>{}</Text>
      <View style={styles.titleArea}>
        <Text style={styles.title}>우아학ㅔ</Text>
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
        />
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (text === "asd" && number === "123") {
              navigate("Tabs", { screen: "Home" });
            } else {
              Alert.alert("wrong id pw", "(test id:asd / pw:123)");
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
  },
  buttonTitle: {
    color: "white",
  },
});
