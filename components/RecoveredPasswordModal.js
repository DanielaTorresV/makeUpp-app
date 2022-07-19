import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Alert,
  Modal,
  Text,
  TextInput,
  Pressable,
  View,
  ActivityIndicator,
} from "react-native";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";
import { recoverPassUser } from "../store/reducers/User.reducer";
import recoveredPasswordModalStyles from "../styles/components/recoveredPasswordModalStyles";

const RecoveredPasswordModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleRecover = async (e) => {
    dispatch(recoverPassUser(email));
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
          <View style={recoveredPasswordModalStyles.centeredView}>
            <View style={recoveredPasswordModalStyles.modalView}>
              <View style={recoveredPasswordModalStyles.containerForm}>
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    recoveredPasswordModalStyles.modalTextTitle,
                  ]}
                >
                  Write the email with which you are registered:
                </Text>
                <TextInput
                  onChangeText={setEmail}
                  value={email}
                  placeholder="Put your email..."
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    recoveredPasswordModalStyles.modalText,
                  ]}
                />
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    recoveredPasswordModalStyles.textStyle,
                    recoveredPasswordModalStyles.buttonSend,
                  ]}
                  onPress={handleRecover}
                >
                  Send
                </Text>
              </View>
              <Pressable
                style={[
                  {
                    fontFamily: "LeckerliOne_400Regular",
                  },
                  recoveredPasswordModalStyles.buttonClose,
                ]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    recoveredPasswordModalStyles.textStyle,
                  ]}
                >
                  Hide Recover Password
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
            recoveredPasswordModalStyles.buttonOpen,
          ]}
          onPress={() => setModalVisible(true)}
        >
          <Text
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              recoveredPasswordModalStyles.textButtonOpen,
            ]}
          >
            Forgot your password?
          </Text>
        </Pressable>
      </View>
    );
  }
};

export default RecoveredPasswordModal;
