import React, { useState, useEffect } from "react";
import { Text, View, Image, TextInput } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";
import registerStyles from "../styles/registerStyles";
import Logo from "../assets/Logo.svg";
import LipStick from "../assets/Labial 1.png";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={registerStyles.container}>
        <Image source={Logo} style={registerStyles.logo} />
        <Text
          style={[
            {
              fontFamily: "LeckerliOne_400Regular",
            },
            registerStyles.textRegister,
          ]}
        >
          Register Now!
        </Text>
        <React.Fragment>
          <View style={registerStyles.containerForm}>
            <TextInput
              onChangeText={setName}
              value={name}
              placeholder="Put your name..."
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                registerStyles.textInputs,
              ]}
            />
            <TextInput
              onChangeText={setEmail}
              value={email}
              placeholder="Put your email..."
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                registerStyles.textInputs,
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
                registerStyles.textInputs,
              ]}
            />
            <TextInput
              onChangeText={setConfPassword}
              value={confPassword}
              placeholder="Confirm your password..."
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                registerStyles.textInputs,
              ]}
            />
            <Text
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                registerStyles.buttonSend,
              ]}
            >
              Send
            </Text>
          </View>
        </React.Fragment>
        <View style={registerStyles.containerBottom}>
          <Image source={LipStick} style={registerStyles.imgBottom} />
          <Text
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              registerStyles.textBack,
            ]}
            onPress={() => navigation.navigate("Welcome")}
          >
            Back to Welcome
          </Text>
        </View>
      </View>
    );
  }
};

export default Register;
