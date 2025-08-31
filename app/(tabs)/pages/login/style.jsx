import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {},
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#1A2A42",
    marginBottom: "20%",
  },
  forms: {
    width: "80%",
    alignItems: "center",
    gap: 35,
  },
  choiceContainer: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputCointaner: {
    gap: 25,
    width: "100%",
  },
  inputEmail: {
    borderWidth: 1,
    borderColor: "#5A5A5A",
    borderRadius: 5,
    padding: 5,
  },
  inputPassword: {
    borderWidth: 1,
    borderColor: "#5A5A5A",
    borderRadius: 5,
    padding: 5,
  },
  buttonLogin: {
    backgroundColor: "#1A2A42",
    width: "100%",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotText: {
    color: "#1A2A42",
  },
  googleContainer: {
    flexDirection: "row",
    gap: 10,
    backgroundColor:"#FFFFFF",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
});
export default styles;
