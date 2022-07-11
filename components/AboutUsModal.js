import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
//import AppLoading from "expo-app-loading";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";

const AboutUsModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
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
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    styles.modalTextTitle,
                  ]}
                >
                  About Us
                </Text>
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    styles.modalText,
                  ]}
                >
                  Our company was born looking to help those who are passionate
                  about makeup, so that they can buy quality products for a low
                  price. Your makeup box will always have 5 excellent products
                  for a fixed price.
                </Text>
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    styles.modalTextTitle,
                  ]}
                >
                  Mision
                </Text>
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    styles.modalText,
                  ]}
                >
                  Create a quality product at a low price, accessible to all
                  public.
                </Text>
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    styles.modalTextTitle,
                  ]}
                >
                  Vision
                </Text>
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    styles.modalText,
                  ]}
                >
                  Being able to reach more countries and offer our great
                  product.
                </Text>
              </View>
              <Pressable
                style={[
                  {
                    fontFamily: "LeckerliOne_400Regular",
                  },
                  styles.button,
                  styles.buttonClose,
                ]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    styles.textStyle,
                  ]}
                >
                  Hide About Us
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[
            {
              fontFamily: "LeckerliOne_400Regular",
            },
            styles.button,
            styles.buttonOpen,
          ]}
          onPress={() => setModalVisible(true)}
        >
          <Text
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              styles.textStyle,
            ]}
          >
            About Us
          </Text>
        </Pressable>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: "#F3DFD1",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#0A4379",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    paddingTop: 15,
    paddingLeft: 10,
    borderRadius: 25,
    elevation: 2,
  },
  buttonOpen: {
    width: 80,
    height: 80,
    backgroundColor: "#C7615D",
  },
  buttonClose: {
    width: 100,
    height: 80,
    backgroundColor: "#C7615D",
  },
  textStyle: {
    color: "#F3DFD1",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTextTitle: {
    color: "#0A4379",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
  },
  modalText: {
    color: "#0A4379",
    fontSize: 15,
    textAlign: "center",
  },
});

export default AboutUsModal;
