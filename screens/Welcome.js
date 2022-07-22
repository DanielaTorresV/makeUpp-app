import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";
import Logo from "../assets/Logo.png";
import Palette from "../assets/Palette.png";
import welcomeStyles from "../styles/welcomeStyles";

const Welcome = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator color="#0A4379" />;
  } else {
    return (
      <ImageBackground source={Palette} style={welcomeStyles.img_background}>
        <View style={welcomeStyles.container}>
          <View style={welcomeStyles.container_welcome}>
            <Text
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                welcomeStyles.textWelcome,
              ]}
            >
              Welcome to
            </Text>
            <Image source={Logo} style={welcomeStyles.logo} />
          </View>
          <View style={welcomeStyles.container_Buttons}>
            <Text
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                welcomeStyles.buttonRegister,
              ]}
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Text>
            <Text
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                welcomeStyles.buttonLogin,
              ]}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
};

export default Welcome;
