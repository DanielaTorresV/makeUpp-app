import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
  FlatList,
  Image,
  ScrollView,
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
import { deleteBox } from "../store/reducers/Box.reducer";

const Box = ({ route, navigation }) => {
  const { box, loading } = useSelector((state) => state.boxReducer);
  const { id } = route.params;
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://192.168.1.12:8080/products/${id}`).then((res) => {
      setData(res.data.data);
    });
  }, []);

  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
  });

  const handleDelete = async (e) => {
    e.preventDefault();
    const boxId = box._id;
    dispatch(deleteBox(boxId));
    navigation.navigate("Products");
  };

  if (loading === true) {
    return <ActivityIndicator color="#0A4379" />;
  }

  console.log(box.products);

  if (!fontsLoaded) {
    return <ActivityIndicator color="#0A4379" />;
  } else {
    return (
      <ImageBackground source={Image_Back} style={boxStyles.img_background}>
        <View style={boxStyles.container}>
          <View style={boxStyles.container_Buttons}>
            <ProfileModal />
          </View>
          <View style={boxStyles.containerBox}>
            <Text
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                boxStyles.title,
              ]}
            >
              Your Box: Add other different products to your box!
            </Text>
            <View style={boxStyles.container_Buttons}>
              {box.products.length < 5 && <ProductsModal />}
              {box.products.length >= 5 && (
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
              )}
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
            </View>
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
            {box && box.products.length > 0 ? (
              <FlatList
                data={box.products}
                renderItem={({ item }) => {
                  return (
                    <View style={boxStyles.containerProduct}>
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
                      <Image
                        source={{ uri: `${item.image}` }}
                        style={boxStyles.imgProduct}
                      />
                    </View>
                  );
                }}
                keyExtractor={(item) => item._id}
              />
            ) : (
              <ActivityIndicator color="#0A4379" />
            )}
          </View>
        </View>
      </ImageBackground>
    );
  }
};

export default Box;
