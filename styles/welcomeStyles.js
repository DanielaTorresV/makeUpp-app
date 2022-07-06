import { StyleSheet } from "react-native";

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  img_background: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container_welcome: {
    alignItems: "center",
    marginTop: 200,
    width: 250,
  },
  text_welcome: {
    fontSize: 24,
    color: "#0A4379",
  },
  logo: {
    width: 170,
    height: 100,
  },
  container_Buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 100,
  },
});

export default welcomeStyles;
