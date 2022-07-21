import { StyleSheet } from "react-native";

const productsModalstyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "90%",
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
    borderRadius: 6,
    elevation: 2,
  },
  buttonOpen: {
    width: 150,
    height: 40,
    paddingTop: 10,
    backgroundColor: "#C7615D",
  },
  buttonClose: {
    width: 150,
    height: 40,
    paddingTop: 10,
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
    fontSize: 16,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },

  modalContainer_textButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 3,
  },

  modalText: {
    color: "#0A4379",
    fontSize: 14,
    marginRight: 10,
  },
  modalAddButton: {
    color: "#F3DFD1",
    fontSize: 14,
    textAlign: "center",
    borderRadius: 8,
    elevation: 2,
    width: 50,
    height: 25,
    padding: 5,
    margin: 5,
    backgroundColor: "#C7615D",
  },
});

export default productsModalstyles;
