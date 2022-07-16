import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import axios from "axios";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";
import ProductsModal from "../components/ProductsModal";
import boxStyles from "../styles/boxStyles";
import ProfileModal from "../components/ProfileModal";
import Image_Back from "../assets/Background-img.png";

const Box = ({ route, navigation }) => {
  const { id } = route.params;
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then((res) => {
      setData(res.data.data);
    });
  }, []);

  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator color="#0A4379" />;
  } else {
    return (
      <ImageBackground source={Image_Back} style={boxStyles.img_background}>
        <View style={boxStyles.container}>
          <View style={boxStyles.container_Buttons}>
            <Text
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                boxStyles.text_GoProducts,
              ]}
              onPress={() => navigation.navigate("Products")}
            >
              Go to Our Products
            </Text>
            <ProfileModal />
          </View>
          {!data ? (
            <ActivityIndicator color="#0A4379" />
          ) : (
            <View style={boxStyles.card}>
              <Text
                style={[
                  {
                    fontFamily: "LeckerliOne_400Regular",
                  },
                  boxStyles.name,
                ]}
              >
                Product: {data.name}
              </Text>
              <Text style={boxStyles.texts_subtitle}>
                Category: {data.category}
              </Text>
              <Text
                style={[
                  {
                    fontFamily: "LeckerliOne_400Regular",
                  },
                  boxStyles.deleteButton,
                ]}
              >
                Delete
              </Text>
            </View>
          )}
        </View>
        <ProductsModal />
      </ImageBackground>
    );
  }
};

export default Box;
