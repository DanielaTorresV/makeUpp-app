import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import axios from "axios";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";
import Logo from "../assets/Logo.png";
import productsStyles from "../styles/ProductsStyles";
import AboutUsModal from "../components/AboutUsModal";
import ProfileModal from "../components/ProfileModal";

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
    return <ActivityIndicator color="#0A4379" />;
  } else {
    return (
      <View style={productsStyles.container}>
        <View style={productsStyles.container_textAndButton}>
          <View style={productsStyles.container_Buttons}>
            <AboutUsModal />
            <ProfileModal />
          </View>
          <View style={productsStyles.container_Buttons}>
            <Image source={Logo} style={productsStyles.logo} />
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
        </View>
        <View>
          {!data ? (
            <ActivityIndicator color="#0A4379" />
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => {
                return (
                  <View style={productsStyles.card}>
                    <Image
                      style={productsStyles.picture}
                      source={{ uri: `${item.image}` }}
                    />
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
                      onPress={() => {
                        navigation.navigate("Box", { id: item.id });
                      }}
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
      </View>
    );
  }
};

export default Products;
