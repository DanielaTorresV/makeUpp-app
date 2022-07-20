import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
  FlatList,
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
import { deleteBox, getBox } from "../store/reducers/Box.reducer";

const Box = ({ route, navigation }) => {
  const { box, loading } = useSelector((state) => state.boxReducer);
  const { id } = route.params;
  const [data, setData] = useState({});
  const [productsBox, setProductsBox] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://192.168.1.11:8080/products/${id}`).then((res) => {
      setData(res.data.data);
    });
  }, []);

  useEffect(() => {
    const boxId = box._id;
    dispatch(getBox(boxId));
    setProductsBox(box.products);
  }, []);

  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
  });

  const handleDelete = async (e) => {
    const boxId = box._id;
    dispatch(deleteBox(boxId, navigation));
  };

  if (loading === true) {
    return <ActivityIndicator color="#0A4379" />;
  }
  console.log(productsBox);
  if (!fontsLoaded) {
    return <ActivityIndicator color="#0A4379" />;
  } else {
    return (
      <ImageBackground source={Image_Back} style={boxStyles.img_background}>
        <View style={boxStyles.container}>
          <View style={boxStyles.container_Buttons}>
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
          <View>
            {!productsBox ? (
              <ActivityIndicator color="#0A4379" />
            ) : (
              <FlatList
                data={productsBox}
                renderItem={({ item }) => {
                  return (
                    <View style={boxStyles.card}>
                      <Text
                        style={[
                          {
                            fontFamily: "LeckerliOne_400Regular",
                          },
                          boxStyles.name,
                        ]}
                      >
                        Product: {item.name}
                      </Text>
                      <Text style={boxStyles.texts_subtitle}>
                        Category: {item.category}
                      </Text>
                    </View>
                  );
                }}
                keyExtractor={(item) => item._id}
              />
            )}
          </View>
          <Text
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              boxStyles.deleteButton,
            ]}
            onPress={handleDelete}
          >
            Delete Box
          </Text>
          <Text
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              boxStyles.deleteButton,
            ]}
            onPress={() => {
              navigation.navigate("Purchase", { id: box._id });
            }}
          >
            Go to Purchase
          </Text>
        </View>
      </ImageBackground>
    );
  }
};

export default Box;
