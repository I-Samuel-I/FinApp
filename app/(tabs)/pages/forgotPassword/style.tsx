import { StyleSheet } from "react-native"

const forgotPasswordStyle = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  headerTitle: {
    marginBottom: 40,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#1A2A42",
  },
  forms: {
    width: "85%",
    alignItems: "center",
    gap: 20,
  },
  descriptionContainer: {
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A2A42",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  inputContainer: {
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
  buttonSubmit: {
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
  backToLoginContainer: {
    marginTop: 10,
  },
  backToLoginText: {
    color: "#1A2A42",
    fontSize: 14,
    textDecorationLine: "underline",
  },
})

export default forgotPasswordStyle
