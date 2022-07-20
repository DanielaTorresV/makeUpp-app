import { Text, ImageBackground, View, ActivityIndicator } from "react-native";
import purchaseStyles from "../styles/purchaseStyles";
import Image_Back from "../assets/Background-img.png";
import {
  useFonts,
  LeckerliOne_400Regular,
} from "@expo-google-fonts/leckerli-one";

const Purchase = ({ route }) => {
  const { id } = route.params;
  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator color="#0A4379" />;
  } else {
    return (
      <ImageBackground
        source={Image_Back}
        style={purchaseStyles.img_background}
      >
        <View style={purchaseStyles.container}>
          <Text>Your Purchase</Text>
        </View>
      </ImageBackground>
    );
  }
};

export default Purchase;
