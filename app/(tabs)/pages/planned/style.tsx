import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  // Header Styles
  header: {
    backgroundColor: "#1A2A42",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  greetingContainer: {
    flex: 1,
    marginLeft: 15,
    alignItems: "center",
    gap: 5,
  },
  greetingText: {
    fontSize: 14,
    color: "#B0B0B0",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },



   title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#1A2A42",
  },

  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
    borderColor: "#DDD",
    borderWidth: 1,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  cardRemaining: {
    fontSize: 12,
    color: "#6a6a6a",
  },

  progressBarBackground: {
    height: 10,
    width: "100%",
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 5,
    marginTop: 5,
  },

  progressBarFill: {
    height: "100%",
    backgroundColor: "#62CC7B",
  },

  spentText: {
    fontSize: 12,
    color: "#555",
  },


  // Bottom Navigation Styles
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#1A2A42",
    paddingVertical: 12,
    paddingBottom: 20,
    justifyContent: "space-around",
    alignItems: "center",
    gap: 25,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  navIcon: {
    fontSize: 24,
    color: "#808080",
  },
  navIconActive: {
    fontSize: 24,
    color: "#FFFFFF",
  },

  bottomSpacing: {
    height: 100,
  },
});
