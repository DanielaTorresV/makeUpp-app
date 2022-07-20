import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, ActivityIndicator, ImageBackground } from "react-native";
import axios from "axios";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";
import ProductsModal from "../components/ProductsModal";
import boxStyles from "../styles/boxStyles";
import ProfileModal from "../components/ProfileModal";
import Image_Back from "../assets/Background-img.png";
import { deleteProductToBox, getBox } from "../store/reducers/Box.reducer";

const Box = ({ route, navigation }) => {
  const { id } = route.params;
  const [data, setData] = useState({});
  const { box, loading } = useSelector((state) => state.boxReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://192.168.1.11:8080/products/${id}`).then((res) => {
      setData(res.data.data);
    });
  }, []);

  useEffect(() => {
    const boxId = box._id;
    dispatch(getBox(boxId));
  }, []);

  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
  });

  console.log(box);
  const handleDeleteProduct = () => {
    const boxId = box._id;
    const dataProduct = { productId: data._id };
    dispatch(deleteProductToBox(boxId, dataProduct));
  };

  if (loading === true) {
    return <ActivityIndicator color="#0A4379" />;
  }

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
                  boxStyles.texts_subtitle,
                ]}
              >
                First Product:
              </Text>
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
            </View>
          )}
        </View>
        <ProductsModal />
        <View>
          <Text
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              boxStyles.name,
            ]}
          >
            Your Box
          </Text>
          <Text
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              boxStyles.texts_subtitle,
            ]}
          >
            Price: $ {box.price}
          </Text>
          <Text
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              boxStyles.texts_subtitle,
            ]}
          >
            Amount: {box.amount}
          </Text>
          <Text
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              boxStyles.name,
            ]}
          >
            Products:
          </Text>
          {box.products.length > 5 ? (
            alert("You can not add more products")
          ) : (
            <View>
              <Text>Product1: {box.products[0]} </Text>
              <Text>Product2: {box.products[1]} </Text>
              <Text>Product3: {box.products[2]} </Text>
              <Text>Product4: {box.products[3]} </Text>
              <Text>Product5: {box.products[4]} </Text>
            </View>
          )}
          <Text
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              boxStyles.deleteButton,
            ]}
            onPress={handleDeleteProduct}
          >
            Delete
          </Text>
        </View>
      </ImageBackground>
    );
  }
};

export default Box;
