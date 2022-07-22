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
  containerBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container_Buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0A4379",
    textAlign: "center",
    margin: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0A4379",
    textAlign: "center",
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
    marginLeft: 10,
    textAlign: "center",
  },
  containerProduct: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E8B6AD",
    borderRadius: 8,
    padding: 8,
    margin: 8,
  },

  card: {
    display: "flex",
    flexDirection: "column",
  },
  imgProduct: {
    width: 60,
    height: 60,
    marginLeft: 8,
    borderRadius: 3,
  },
});

export default boxStyles;
