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
import { updatePurchase } from "../store/reducers/Purchase.reducer";
import Image_Back from "../assets/Background-img.png";
import ProfileModal from "../components/ProfileModal";
import PaymentButton from "../components/PaymentButton";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";

const Purchase = () => {
  const { purchases, loading } = useSelector((state) => state.purchaseReducer);
  const { user } = useSelector((state) => state.userReducer);
  const { box } = useSelector((state) => state.boxReducer);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const dispatch = useDispatch();

  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
  });

  const handleUpdate = async (e) => {
    const data = { address, phone };
    const purchaseId = purchases._id;
    dispatch(updatePurchase(purchaseId, data));
  };

  if (loading === true) {
    return <ActivityIndicator color="#0A4379" />;
  }

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
            Edit the fields with the shipping information, if this is different
            from the user information.
          </Text>
          <TextInput
            onChangeText={setPhone}
            value={phone}
            placeholder="Write the contact phone number..."
            style={purchaseStyles.textInputs}
          />
          <TextInput
            onChangeText={setAddress}
            value={address}
            placeholder="Write the shipping address..."
            style={purchaseStyles.textInputs}
          />
          <View style={purchaseStyles.container_Buttons}>
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
          <View style={purchaseStyles.containerDetail}>
            <Text
              style={[
                {
                  fontFamily: "LeckerliOne_400Regular",
                },
                purchaseStyles.textTitle,
              ]}
            >
              Details
            </Text>
            {purchases.box.length > 0 && (
              <View>
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    purchaseStyles.textPar,
                  ]}
                >
                  Name: {purchases.user[0].name}
                </Text>
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    purchaseStyles.textPar,
                  ]}
                >
                  Email: {purchases.user[0].email}
                </Text>
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    purchaseStyles.textPar,
                  ]}
                >
                  Address: {purchases.address}
                </Text>
                <Text
                  style={[
                    {
                      fontFamily: "LeckerliOne_400Regular",
                    },
                    purchaseStyles.textPar,
                  ]}
                >
                  Phone: {purchases.phone}
                </Text>
                <View>
                  <Text
                    style={[
                      {
                        fontFamily: "LeckerliOne_400Regular",
                      },
                      purchaseStyles.textTitle,
                    ]}
                  >
                    Products:
                  </Text>
                  {box.products.length > 0 && (
                    <>
                      <Text
                        style={[
                          {
                            fontFamily: "LeckerliOne_400Regular",
                          },
                          purchaseStyles.textPar,
                        ]}
                      >
                        Producto1: {box.products[0].name}
                      </Text>
                      <Text
                        style={[
                          {
                            fontFamily: "LeckerliOne_400Regular",
                          },
                          purchaseStyles.textPar,
                        ]}
                      >
                        Producto2: {box.products[1].name}
                      </Text>
                      <Text
                        style={[
                          {
                            fontFamily: "LeckerliOne_400Regular",
                          },
                          purchaseStyles.textPar,
                        ]}
                      >
                        Producto3: {box.products[2].name}
                      </Text>
                      <Text
                        style={[
                          {
                            fontFamily: "LeckerliOne_400Regular",
                          },
                          purchaseStyles.textPar,
                        ]}
                      >
                        Producto4: {box.products[3].name}
                      </Text>
                      <Text
                        style={[
                          {
                            fontFamily: "LeckerliOne_400Regular",
                          },
                          purchaseStyles.textPar,
                        ]}
                      >
                        Producto5: {box.products[4].name}
                      </Text>
                      <Text
                        style={[
                          {
                            fontFamily: "LeckerliOne_400Regular",
                          },
                          purchaseStyles.textPar,
                        ]}
                      >
                        Price: ${box.price}
                      </Text>
                    </>
                  )}
                </View>
              </View>
            )}
          </View>
          {/*<PaymentButton />*/}
        </View>
      </ImageBackground>
    );
  }
};

export default Purchase;
