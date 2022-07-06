import React, { useState, useEffect } from "react";
import { Text, View, Image, TextInput } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";
import loginStyles from "../styles/loginStyles";
import Logo from "../assets/Logo.svg";
import Brocha from "../assets/Brocha 1.png";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={loginStyles.container}>
        <Image source={Logo} style={loginStyles.logo} />
        <Text
          style={[
            {
              fontFamily: "LeckerliOne_400Regular",
            },
            loginStyles.textLogin,
          ]}
        >
          Login!
        </Text>
        <React.Fragment>
          <View style={loginStyles.containerForm}>
            <TextInput
              onChangeText={setEmail}
              value={email}
              placeholder="Put your email..."
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                loginStyles.textInputs,
              ]}
            />
            <TextInput
              onChangeText={setPassword}
              value={password}
              placeholder="Put your password..."
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                loginStyles.textInputs,
              ]}
            />
            <Text
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                loginStyles.buttonSend,
              ]}
            >
              Send
            </Text>
          </View>
        </React.Fragment>
        <View style={loginStyles.containerBottom}>
          <Text
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              loginStyles.textBack,
            ]}
            onPress={() => navigation.navigate("Welcome")}
          >
            Back to Welcome
          </Text>
          <Image source={Brocha} style={loginStyles.imgBottom} />
        </View>
      </View>
    );
  }
};

export default Login;
