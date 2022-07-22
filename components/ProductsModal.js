import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from "react-native";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";
import productsModalstyles from "../styles/components/productsModalStyles";
import { updateBox } from "../store/reducers/Box.reducer";

const ProductsModal = () => {
  const { box } = useSelector((state) => state.boxReducer);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(" https://makeupp-app.herokuapp.com/products/").then((res) => {
      setData(res.data.data);
    });
  }, []);

  const handleAdd = async (id) => {
    const boxId = box._id;
    const data = { idLastProduct: id };
    dispatch(updateBox(boxId, data));
  };

  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator color="#0A4379" />;
  } else {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <ScrollView>
            <View style={productsModalstyles.centeredView}>
              <View style={productsModalstyles.modalView}>
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    productsModalstyles.modalTextTitle,
                  ]}
                >
                  Our Products
                </Text>
                {!data ? (
                  <ActivityIndicator color="#0A4379" />
                ) : (
                  <FlatList
                    data={data}
                    renderItem={({ item }) => {
                      return (
                        <View
                          style={productsModalstyles.modalContainer_textButton}
                        >
                          <Text
                            style={[
                              {
                                fontFamily: "LeckerliOne_400Regular",
                              },
                              productsModalstyles.modalText,
                            ]}
                          >
                            * Product: {item.name}
                          </Text>
                          <Text
                            style={[
                              {
                                fontFamily: "LeckerliOne_400Regular",
                              },
                              productsModalstyles.modalAddButton,
                            ]}
                            onPress={() => {
                              handleAdd(item._id);
                            }}
                          >
                            Add
                          </Text>
                        </View>
                      );
                    }}
                    keyExtractor={(item) => item._id}
                  />
                )}
                <Pressable
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    productsModalstyles.button,
                    productsModalstyles.buttonClose,
                  ]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text
                    style={[
                      {
                        fontFamily: "LeckerliOne_400Regular",
                      },
                      productsModalstyles.textStyle,
                    ]}
                  >
                    Hide Products
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </Modal>
        <Pressable
          style={[
            {
              fontFamily: "LeckerliOne_400Regular",
            },
            productsModalstyles.button,
            productsModalstyles.buttonOpen,
          ]}
          onPress={() => setModalVisible(true)}
        >
          <Text
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              productsModalstyles.textStyle,
            ]}
          >
            Add Product
          </Text>
        </Pressable>
      </View>
    );
  }
};

export default ProductsModal;
