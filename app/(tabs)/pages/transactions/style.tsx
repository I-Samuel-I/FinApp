import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },

  // Header
  header: {
    backgroundColor: "#1A2A42",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  greetingContainer: {
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

  // Search Box
  searchBox: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#DDD",
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
  },

  // Date label
  dateLabel: {
    marginTop: 25,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },

  // Transaction Row
  transactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },

  iconLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  transactionTitle: {
    fontSize: 15,
    color: "#000",
  },

  transactionValue: {
    fontSize: 15,
    fontWeight: "bold",
  },

  valueIn: {
    color: "#3CB371",
  },

  valueOut: {
    color: "#D9534F",
  },

  // FAB Styles
  fab: {
    position: "absolute",
    bottom: 50,
    zIndex: 10,
    alignSelf: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabIcon: {
  fontSize: 40,
    color: "#1A2A42",
    fontWeight: "300",
    top: -5,
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
