import { StyleSheet } from "react-native";

const purchaseStyles = StyleSheet.create({
  img_background: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  textTitle: {
    margin: 8,
    fontSize: 20,
    color: "#0A4379",
  },
  textPar: {
    fontSize: 15,
    color: "#0A4379",
  },
  textInputs: {
    padding: 5,
    marginVertical: 8,
    backgroundColor: "#F3DFD1",
    width: "80%",
    borderRadius: 8,
    fontSize: 16,
    color: "#0A4379",
  },

  buttonsPurchase: {
    alignItems: "center",
    borderRadius: 10,
    width: 120,
    height: 60,
    padding: 5,
    marginLeft: 8,
    backgroundColor: "#C7615D",
    color: "#F3DFD1",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  container_Buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
});

export default purchaseStyles;
