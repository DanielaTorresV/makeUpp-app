import { StyleSheet } from "react-native";

const recoveredPasswordModalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 75,
  },
  modalView: {
    width: "80%",
    backgroundColor: "#F3DFD1",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#0A4379",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5,
  },
  containerForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonOpen: {
    width: 200,
    height: 45,
    padding: 5,
    marginLeft: 30,
  },
  textButtonOpen: {
    color: "#F3DFD1",
    fontSize: 16,
  },
  buttonClose: {
    alignItems: "center",
    borderRadius: 8,
    elevation: 2,
    width: 200,
    height: 35,
    padding: 7,
    marginTop: 8,
    backgroundColor: "#C7615D",
  },
  buttonSend: {
    alignItems: "center",
    borderRadius: 8,
    elevation: 2,
    width: 100,
    height: 30,
    padding: 5,
    marginTop: 8,
    backgroundColor: "#C7615D",
  },
  textStyle: {
    color: "#F3DFD1",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTextTitle: {
    color: "#0A4379",
    fontSize: 16,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },
  modalText: {
    color: "#0A4379",
    fontSize: 16,
    height: "25%",
    textAlign: "center",
  },
});

export default recoveredPasswordModalStyles;
