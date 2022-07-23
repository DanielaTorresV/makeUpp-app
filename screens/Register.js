import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Text, View, Image, TextInput, ActivityIndicator } from "react-native";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";
import registerStyles from "../styles/registerStyles";
import Logo from "../assets/Logo.png";
import LipStick from "../assets/Labial.png";
import { registerUser } from "../store/reducers/User.reducer";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    dispatch(registerUser(name, email, password, confPassword, navigation));
  };

  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator color="#0A4379" />;
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
              style={registerStyles.textInputs}
            />
            <TextInput
              onChangeText={setEmail}
              value={email}
              placeholder="Put your email..."
              style={registerStyles.textInputs}
            />
            <TextInput
              onChangeText={setPassword}
              value={password}
              placeholder="Put your password..."
              secureTextEntry={true}
              style={registerStyles.textInputs}
            />
            <TextInput
              onChangeText={setConfPassword}
              value={confPassword}
              placeholder="Confirm your password..."
              secureTextEntry={true}
              style={registerStyles.textInputs}
            />
            <Text
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                registerStyles.buttonSend,
              ]}
              onPress={handleRegister}
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
