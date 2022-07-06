import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, ImageBackground } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";
import Logo from "../../assets/Logo.svg";
import Palette from "../../assets/Palette.png";
import welcomeStyles from "../../styles/welcomeStyles";

const Welcome = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ImageBackground source={Palette} style={welcomeStyles.img_background}>
        <View style={welcomeStyles.container}>
          <View style={welcomeStyles.container_welcome}>
            <Text
              style={{
                fontFamily: "LeckerliOne_400Regular",
                fontSize: 36,
                color: "#0A4379",
              }}
            >
              Welcome to
            </Text>
            <Image source={Logo} style={welcomeStyles.logo} />
          </View>
          <View style={welcomeStyles.container_Buttons}>
            <Button
              title="Register"
              color="#D96C60"
              onPress={() => navigation.navigate("Register")}
            />
            <Button
              title="Login"
              color="#D96C60"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
};

export default Welcome;
