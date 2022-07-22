import { StyleSheet } from "react-native";

const registerStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#C7615D",
  },
  logo: {
    marginTop: 10,
    marginLeft: 10,
    width: 150,
    height: 90,
  },
  textRegister: {
    fontSize: 30,
    color: "#F3DFD1",
    textAlign: "center",
    margin: 12,
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
    height: "10%",
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
    marginTop: 10,
    borderRadius: 10,
  },
  containerBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 20,
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

export default registerStyles;
