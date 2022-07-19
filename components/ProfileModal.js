import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { getUser, updateUser } from "../store/reducers/User.reducer";

const ProfileModal = () => {
  const { user, loadingUsers } = useSelector((state) => state.userReducer);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  console.log(user);
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const handleUpdate = () => {
    setData({ name, phone, address });
    dispatch(updateUser(data));
  };

  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator color="#0A4379" />;
  } else if (loadingUsers === true) {
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
                Name:
              </Text>
              <TextInput
                onChangeText={setName}
                value={name}
                placeholder={user.name}
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
                placeholder={user.phone}
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
                placeholder={user.address}
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
                  ProfileModalstyles.buttonProfile,
                  ProfileModalstyles.textStyle,
                ]}
                onPress={handleUpdate}
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
