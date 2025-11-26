import { StyleSheet } from "react-native";

const COLORS = {
  primaryDark: "#102338",
  secondaryDark: "#1A2A42",
  textPrimary: "#1A1A1A",
  textSecondary: "#888",
  background: "#F5F5F5",
  white: "#FFFFFF",
  greenBalance: "#5CB85C",
  divider: "#E0E0E0",
  itaubg: "#FF6200",
  ticketbg: "#E60014",
  registerButton: "#1A2A42",
};

export const styles = StyleSheet.create({
  // --- Estilos de Layout ---
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 0,
    position: "relative",
  },

  header: {
    backgroundColor: COLORS.primaryDark,
    paddingVertical: 35,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: "center",
    position: "relative",
  },
  settingsIcon: {
    position: "absolute",
    right: 20,
    top: 40,
  },
  headerButton: {
    backgroundColor: COLORS.secondaryDark,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  headerButtonText: {
    color: COLORS.white,
    fontSize: 14,
  },
  headerMonthText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },

  totalBalanceContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 5,
    alignItems: "center",
  },
  totalBalanceTitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 5,
  },
  totalBalanceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  totalBalanceValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.greenBalance,
  },

  // --- Linha Divisória ---
  listDivider: {
    height: 1,
    backgroundColor: COLORS.divider,
    marginHorizontal: 20,
    marginTop: 15,
  },

  // --- Lista de Contas (AccountListItem) ---
  listContainer: {
    paddingHorizontal: 0,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
    backgroundColor: COLORS.white,
  },
  listItemIconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  listIconText: {
    fontSize: 10,
    fontWeight: "bold",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: "hidden",
  },
  listItemInfo: {
    flex: 1,
  },
  listTitle: {
    fontSize: 16,
    color: COLORS.textPrimary,
    fontWeight: "600",
  },
  listSubtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  listItemBalance: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  listBalanceText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.greenBalance,
  },

  registerButtonContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  registerButton: {
    backgroundColor: COLORS.registerButton,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  registerButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
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
});
