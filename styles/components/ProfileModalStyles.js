import { StyleSheet } from "react-native";

const ProfileModalstyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 90,
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
  buttonProfile: {
    width: 100,
    height: 40,
    paddingTop: 10,
    marginTop: 8,
    marginLeft: 8,
    backgroundColor: "#C7615D",
  },
  imgProfile: {
    width: 55,
    height: 55,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#C7615D",
    alignSelf: "center",
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
    width: 220,
    color: "#0A4379",
    fontSize: 16,
    textAlign: "center",
  },
  containerButtons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default ProfileModalstyles;
