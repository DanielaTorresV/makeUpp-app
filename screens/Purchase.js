import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  ImageBackground,
  View,
  ActivityIndicator,
  TextInput,
} from "react-native";
import purchaseStyles from "../styles/purchaseStyles";
import {
  createPurchase,
  updatePurchase,
} from "../store/reducers/Purchase.reducer";
import Image_Back from "../assets/Background-img.png";
import ProfileModal from "../components/ProfileModal";
import PaymentButton from "../components/PaymentButton";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";

const Purchase = ({ route }) => {
  const { purchases } = useSelector((state) => state.purchaseReducer);
  const { id } = route.params;
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
  });

  const handleCreate = async (e) => {
    const data = { address, phone };
    dispatch(createPurchase(id, data));
  };

  const handleUpdate = async (e) => {
    const data = { address, phone };
    const purchseId = purchases._id;
    dispatch(updatePurchase(purchseId, data));
  };

  if (!fontsLoaded) {
    return <ActivityIndicator color="#0A4379" />;
  } else {
    return (
      <ImageBackground
        source={Image_Back}
        style={purchaseStyles.img_background}
      >
        <View style={purchaseStyles.container}>
          <ProfileModal />
          <Text
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              purchaseStyles.textTitle,
            ]}
          >
            Your Purchase
          </Text>
          <Text
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              purchaseStyles.textPar,
            ]}
          >
            Edit the fields with the shipping information.
          </Text>
          <TextInput
            onChangeText={setPhone}
            value={phone}
            placeholder="Write the contact phone number..."
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              purchaseStyles.textInputs,
            ]}
          />
          <TextInput
            onChangeText={setAddress}
            value={address}
            placeholder="Write the shipping address..."
            style={[
              {
                fontFamily: "LeckerliOne_400Regular",
              },
              purchaseStyles.textInputs,
            ]}
          />
          <View style={purchaseStyles.container_Buttons}>
            <Text
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                purchaseStyles.buttonsPurchase,
              ]}
              onPress={handleCreate}
            >
              Create Purchase
            </Text>
            <Text
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                purchaseStyles.buttonsPurchase,
              ]}
              onPress={handleUpdate}
            >
              Update Purchase
            </Text>
          </View>
          {/*<PaymentButton />*/}
          <View></View>
        </View>
      </ImageBackground>
    );
  }
};

export default Purchase;
