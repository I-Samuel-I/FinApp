import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    /* HEADER */
    header: {
        backgroundColor: "#102338",
        paddingVertical: 35,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: "center",
        position: "relative"
    },

    settingsIcon: {
        position: "absolute",
        right: 20,
        top: 40,
    },

    headerButton: {
        backgroundColor: "#2F4156",
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 6,
    },

    headerButtonText: {
        color: "#fff",
        fontSize: 14,
    },

    /* LIST */
    listContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },

    listItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: "#CCC",
    },

    listText: {
        marginLeft: 15,
        fontSize: 16,
        color: "#1A1A1A",
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
