import React from "react";
import { useDispatch } from "react-redux";
import { Text } from "react-native";
import purchaseStyles from "../styles/purchaseStyles";
import { confirmPurchase } from "../store/reducers/User.reducer";

const ConfirmPurchaseButton = ({
  navigation,
  userName,
  userAddress,
  userPhone,
  boxPrice,
  boxProducts,
  email,
}) => {
  const dispatch = useDispatch();
  const handleConfirm = async (e) => {
    e.preventDefault();
    const data = {
      name: userName,
      email: email,
      phone: userPhone,
      address: userAddress,
      price: boxPrice,
      products: boxProducts,
    };
    dispatch(confirmPurchase(data));
    navigation.navigate("Products");
  };

  return (
    <Text
      style={[
        {
          fontFamily: "LeckerliOne_400Regular",
        },
        purchaseStyles.buttonsPurchase,
      ]}
      onPress={handleConfirm}
    >
      Confirm your Purchase
    </Text>
  );
};

export default ConfirmPurchaseButton;
