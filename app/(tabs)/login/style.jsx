import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  headerTitle: {},
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#1A2A42",
    marginBottom: 60,
  },
  forms: {
    width: "85%",
    alignItems: "center",
    gap: 20,
  },
  choiceContainer: {
    borderWidth: 1,
    borderColor: "#1A2A42",
    borderRadius: 50,
    width: "100%",
    flexDirection: "row",
    overflow: "hidden",
  },
  tabActive: {
    flex: 1,
    backgroundColor: "#1A2A42",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  tabInactive: {
    flex: 1,
    backgroundColor: "transparent",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  tabTextActive: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  tabTextInactive: {
    color: "#1A2A42",
    fontSize: 16,
    fontWeight: "600",
  },
  inputCointaner: {
    gap: 15,
    width: "100%",
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#D0D0D0",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#FFFFFF",
  },
  input: {
    fontSize: 16,
    color: "#1A2A42",
    paddingVertical: 8,
  },
  buttonLogin: {
    backgroundColor: "#1A2A42",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotContainer: {
    alignItems: "center",
    gap: 5,
  },
  forgotText: {
    color: "#1A2A42",
    fontSize: 14,
  },
  clickHereText: {
    color: "#1A2A42",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  socialContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: "#FFFFFF",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
});

export default styles;
