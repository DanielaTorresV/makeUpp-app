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
    marginTop: 100,
    width: 250,
  },
  textWelcome: {
    fontSize: 40,
    color: "#0A4379",
  },
  logo: {
    marginTop: 20,
    width: 190,
    height: 120,
  },
  container_Buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 100,
  },
  buttonRegister: {
    fontSize: 22,
    color: "#F3DFD1",
    backgroundColor: "#C7615D",
    width: 100,
    height: 100,
    paddingTop: 30,
    paddingLeft: 10,
    marginLeft: 32,
    borderRadius: 50,
  },
  buttonLogin: {
    fontSize: 22,
    color: "#F3DFD1",
    backgroundColor: "#D96C60",
    width: 100,
    height: 100,
    paddingTop: 30,
    paddingLeft: 20,
    marginLeft: 12,
    borderRadius: 50,
  },
});

export default welcomeStyles;
