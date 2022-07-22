import { StyleSheet } from "react-native";

const AboutusModalstyles = StyleSheet.create({
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
  button: {
    alignItems: "center",
    borderRadius: 15,
    elevation: 2,
  },
  buttonOpen: {
    width: 85,
    height: 45,
    paddingTop: 10,
    backgroundColor: "#C7615D",
  },
  buttonClose: {
    width: 100,
    height: 60,
    paddingTop: 8,
    marginTop: 8,
    backgroundColor: "#C7615D",
  },
  textStyle: {
    color: "#F3DFD1",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTextTitle: {
    color: "#0A4379",
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },
  modalText: {
    color: "#0A4379",
    fontSize: 14,
    textAlign: "center",
  },
});

export default AboutusModalstyles;
