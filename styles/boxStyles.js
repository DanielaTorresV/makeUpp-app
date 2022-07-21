import { StyleSheet } from "react-native";

const boxStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  img_background: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container_Buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
  },
  card: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0A4379",
  },
  texts_subtitle: {
    fontSize: 14,
    color: "#0A4379",
  },
  deleteButton: {
    width: 100,
    padding: 10,
    backgroundColor: "#F3DFD1",
    fontSize: 16,
    fontWeight: "bold",
    color: "#C7615D",
    borderRadius: 6,
    margin: 4,
    textAlign: "center",
  },
  addButton: {
    borderRadius: 6,
    width: 100,
    height: 60,
    paddingTop: 5,
    backgroundColor: "#C7615D",
    color: "#F3DFD1",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
  },
  containerProduct: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E8B6AD",
    borderRadius: 6,
    padding: 8,
    width: "95%",
    margin: 8,
  },
  imgProduct: {
    width: "20%",
    height: "100%",
    marginLeft: 20,
    marginRight: 4,
  },
});

export default boxStyles;
