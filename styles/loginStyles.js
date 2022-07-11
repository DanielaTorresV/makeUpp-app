import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#D96C60",
  },
  logo: {
    marginTop: 10,
    marginLeft: 10,
    width: 150,
    height: 90,
  },
  textLogin: {
    fontSize: 30,
    color: "#F3DFD1",
    textAlign: "center",
    margin: 28,
  },
  containerForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textInputs: {
    padding: 5,
    marginVertical: 8,
    backgroundColor: "#F3DFD1",
    height: "15%",
    width: "70%",
    borderRadius: 8,
    fontSize: 18,
    color: "#0A4379",
  },
  buttonSend: {
    fontSize: 22,
    textAlign: "center",
    color: "#F3DFD1",
    backgroundColor: "#956068",
    width: 100,
    height: 40,
    padding: 5,
    margin: 10,
    borderRadius: 10,
  },
  containerBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  imgBottom: {
    width: 70,
    height: 40,
  },
  textBack: {
    fontSize: 24,
    color: "#F3DFD1",
    textAlign: "center",
  },
});

export default loginStyles;
