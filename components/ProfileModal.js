import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  ActivityIndicator,
  TextInput,
  Image,
} from "react-native";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";
import ProfileModalstyles from "../styles/components/ProfileModalStyles";

const ProfileModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
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
          <View style={ProfileModalstyles.centeredView}>
            <View style={ProfileModalstyles.modalView}>
              <Text
                style={[
                  {
                    fontFamily: "LeckerliOne_400Regular",
                  },
                  ProfileModalstyles.modalTextTitle,
                ]}
              >
                Profile
              </Text>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/dannytorres/image/upload/v1657585427/Icono_jlfe2f.png",
                }}
                style={ProfileModalstyles.imgProfile}
              />
              <Text
                style={[
                  {
                    fontFamily: "LeckerliOne_400Regular",
                  },
                  ProfileModalstyles.modalTextTitle,
                ]}
              >
                Name
              </Text>
              <TextInput
                onChangeText={setName}
                value={name}
                placeholder="Poner nombre del login..."
                style={[
                  {
                    fontFamily: "LeckerliOne_400Regular",
                  },
                  ProfileModalstyles.modalText,
                ]}
              />
              <Text
                style={[
                  {
                    fontFamily: "LeckerliOne_400Regular",
                  },
                  ProfileModalstyles.modalTextTitle,
                ]}
              >
                Phone
              </Text>
              <TextInput
                onChangeText={setPhone}
                value={phone}
                placeholder="Update your phone..."
                style={[
                  {
                    fontFamily: "LeckerliOne_400Regular",
                  },
                  ProfileModalstyles.modalText,
                ]}
              />
              <Text
                style={[
                  {
                    fontFamily: "LeckerliOne_400Regular",
                  },
                  ProfileModalstyles.modalTextTitle,
                ]}
              >
                Address
              </Text>
              <TextInput
                onChangeText={setAddress}
                value={address}
                placeholder="Update your address..."
                style={[
                  {
                    fontFamily: "LeckerliOne_400Regular",
                  },
                  ProfileModalstyles.modalText,
                ]}
              />
              <Text
                style={[
                  {
                    fontFamily: "LeckerliOne_400Regular",
                  },
                  ProfileModalstyles.button,
                  ProfileModalstyles.buttonClose,
                  ProfileModalstyles.textStyle,
                ]}
              >
                Update
              </Text>
              <Pressable
                style={[
                  {
                    fontFamily: "LeckerliOne_400Regular",
                  },
                  ProfileModalstyles.button,
                  ProfileModalstyles.buttonClose,
                ]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    ProfileModalstyles.textStyle,
                  ]}
                >
                  Hide Profile
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
            ProfileModalstyles.button,
            ProfileModalstyles.buttonOpen,
          ]}
          onPress={() => setModalVisible(true)}
        >
          <Text
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              ProfileModalstyles.textStyle,
            ]}
          >
            Your Profile
          </Text>
        </Pressable>
      </View>
    );
  }
};

export default ProfileModal;
