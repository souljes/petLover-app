import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import { globalStyles } from "../../Global Styles/Global";
import { useNavigation } from "@react-navigation/native";

function Login() {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    if (!phoneNumber) {
      Alert.alert("Error", "Please enter your phone number");
      return;
    }
    const phone8Num = /^\d{8}$/;
    if (!phone8Num.test(phoneNumber)) {
      Alert.alert("Error", "Phone Number Should be 8 numbers");
      return;
    }
    navigation.navigate("OTP");
  };
  const handleGustLogin = () => {
    // Gust Login
  };

  return (
    <>
      <View style={styles.loginContainer}>
        <Image
          source={require("../../assets/LOGO.png")}
          style={styles.profileImageLogin}
        />
        <TextInput
          style={styles.input}
          placeholder="رقم الهاتف"
          placeholderTextColor="black"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="numeric"
          require
        />
        {/* <TextInput
          style={styles.input}
          placeholder="اسم المستخدم"
          placeholderTextColor="black"
        /> */}

        <TouchableOpacity onPress={handleLogin} style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>تسجيل</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGustLogin} style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>دخول كضيف</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export const styles = StyleSheet.create({
  profileImageLogin: {
    width: 120,
    height: 120,
    borderRadius: 75,
    marginBottom: 10,
    resizeMode: "cover",
  },
  loginContainer: {
    // height: "50%",
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    margin: 16,
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    paddingLeft: 8,
    width: "85%",
    textAlign: "right",
    color: "#1d3f40",
  },

  forgetPasswordText: {
    color: "red",
    marginTop: 10,
  },
});

export default Login;
