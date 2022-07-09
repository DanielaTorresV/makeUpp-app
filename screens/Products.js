import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, FlatList } from "react-native";
import AppLoading from "expo-app-loading";
import axios from "axios";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";
import Logo from "../assets/Logo.svg";
import productsStyles from "../styles/Products";
import AboutUsModal from "../components/AboutUsModal";

const Products = ({ navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  }, []);
  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ScrollView style={productsStyles.container}>
        <View style={productsStyles.container_textAndButton}>
          <View style={productsStyles.container_Buttons}>
            <AboutUsModal />
            <Text
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                productsStyles.button_Profile,
              ]}
            >
              Your Profile
            </Text>
          </View>
          <Text
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              productsStyles.textProducts,
            ]}
          >
            Our Products
          </Text>
        </View>
        <View>
          {!data ? (
            <Text
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                productsStyles.textProducts,
              ]}
            >
              Loading...
            </Text>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => {
                return (
                  <View style={productsStyles.card}>
                    <Image style={productsStyles.picture} source={item.image} />
                    <Text
                      style={[
                        {
                          fontFamily: "LeckerliOne_400Regular",
                        },
                        productsStyles.name,
                      ]}
                    >
                      Product: {item.title}
                    </Text>
                    <Text style={productsStyles.texts_subtitle}>
                      Description
                    </Text>
                    <Text style={productsStyles.texts}>{item.description}</Text>
                    <Text style={productsStyles.texts_subtitle}>Category</Text>
                    <Text style={productsStyles.texts}>{item.category}</Text>
                    <Text
                      style={[
                        {
                          fontFamily: "LeckerliOne_400Regular",
                        },
                        productsStyles.goButton,
                      ]}
                      onPress={() => {}}
                    >
                      Add to Box
                    </Text>
                  </View>
                );
              }}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
        <Image source={Logo} style={productsStyles.logo} />
      </ScrollView>
    );
  }
};

export default Products;
