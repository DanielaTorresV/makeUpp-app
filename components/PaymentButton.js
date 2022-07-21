import { Text } from "react-native";
import purchaseStyles from "../styles/purchaseStyles";

/*const handler = window.ePayco.checkout.configure({
  key: "1d37a69af3a0184dca63666d93e84d6a",
  test: true,
}); */

const PaymentButton = ({ navigation }) => {
  function handleClick() {
    const invoice = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
    handler.open({
      external: false,

      //Parametros compra (obligatorio)
      name: "Tableros ilimitados",
      description: "Compra tus tableros ilimitados",
      invoice: `${invoice}`,
      currency: "cop",
      amount: "50000",
      tax_base: "0",
      tax: "0",
      country: "co",
      lang: "es",

      response: `${navigation.navigate("Products")}`,

      //Atributos cliente
      name_billing: "Completar",
      address_billing: "Completar",
      type_doc_billing: "cc",
      mobilephone_billing: "Completar",
      number_doc_billing: "Completar",

      //atributo deshabilitación metodo de pago
      methodsDisable: ["PSE"],
    });
  }

  return (
    <Text
      style={[
        {
          fontFamily: "LeckerliOne_400Regular",
        },
        purchaseStyles.buttonsPurchase,
      ]}
      onPress={handleClick}
    >
      Make Payment
    </Text>
  );
};

export default PaymentButton;
