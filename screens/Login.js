import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Text, View, Image, TextInput, ActivityIndicator } from "react-native";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";
import loginStyles from "../styles/loginStyles";
import Logo from "../assets/Logo.png";
import Brocha from "../assets/Brocha.png";
import { loginUser } from "../store/reducers/User.reducer";
import RecoveredPasswordModal from "../components/RecoveredPasswordModal";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    dispatch(loginUser(email, password, navigation));
  };

  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator color="#0A4379" />;
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
              style={loginStyles.textInputs}
            />
            <TextInput
              onChangeText={setPassword}
              value={password}
              placeholder="Put your password..."
              secureTextEntry={true}
              style={loginStyles.textInputs}
            />
            <Text
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                loginStyles.buttonSend,
              ]}
              onPress={handleLogin}
            >
              Send
            </Text>
          </View>
        </React.Fragment>
        <View style={loginStyles.containerRecoverPassword}>
          <RecoveredPasswordModal />
        </View>
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
