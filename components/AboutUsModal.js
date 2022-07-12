import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  ActivityIndicator,
} from "react-native";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";
import AboutusModalstyles from "../styles/components/AboutusModalStyles";

const AboutUsModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
          <View style={AboutusModalstyles.centeredView}>
            <View style={AboutusModalstyles.modalView}>
              <View>
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    AboutusModalstyles.modalTextTitle,
                  ]}
                >
                  About Us
                </Text>
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    AboutusModalstyles.modalText,
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
                    AboutusModalstyles.modalTextTitle,
                  ]}
                >
                  Mision
                </Text>
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    AboutusModalstyles.modalText,
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
                    AboutusModalstyles.modalTextTitle,
                  ]}
                >
                  Vision
                </Text>
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    AboutusModalstyles.modalText,
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
                  AboutusModalstyles.button,
                  AboutusModalstyles.buttonClose,
                ]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    AboutusModalstyles.textStyle,
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
            AboutusModalstyles.button,
            AboutusModalstyles.buttonOpen,
          ]}
          onPress={() => setModalVisible(true)}
        >
          <Text
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              AboutusModalstyles.textStyle,
            ]}
          >
            About Us
          </Text>
        </Pressable>
      </View>
    );
  }
};

export default AboutUsModal;
