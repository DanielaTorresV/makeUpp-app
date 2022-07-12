import { StyleSheet } from "react-native";

const productsStyles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  container_textAndButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    margin: 15,
  },
  textProducts: {
    fontSize: 32,
    color: "#0A4379",
    textAlign: "center",
    paddingTop: 25,
  },
  container_Buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#C7615D",
    borderRadius: 6,
    padding: 15,
    display: "flex",
    flexDirection: "column",
    margin: 12,
    alignItems: "center",
  },
  picture: {
    width: 200,
    height: 200,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#F3DFD1",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F3DFD1",
  },
  texts_subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0A4379",
  },
  texts: {
    fontSize: 12,
    color: "#0A4379",
  },
  goButton: {
    padding: 10,
    backgroundColor: "#F3DFD1",
    fontSize: 16,
    fontWeight: "bold",
    color: "#C7615D",
    borderRadius: 6,
    margin: 4,
  },
  logo: {
    marginLeft: 10,
    width: 130,
    height: 70,
  },
});

export default productsStyles;
