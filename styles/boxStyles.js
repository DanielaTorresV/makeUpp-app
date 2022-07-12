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
    marginTop: 15,
  },
  text_GoProducts: {
    alignItems: "center",
    borderRadius: 15,
    width: 100,
    height: 60,
    paddingTop: 5,
    backgroundColor: "#C7615D",
    color: "#F3DFD1",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#E8B6AD",
    borderRadius: 6,
    padding: 8,
    display: "flex",
    flexDirection: "column",
    margin: 12,
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
    borderRadius: 15,
    width: 100,
    height: 60,
    paddingTop: 5,
    backgroundColor: "#C7615D",
    color: "#F3DFD1",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default boxStyles;
