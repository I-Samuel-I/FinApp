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
  registerButton: "#1A2A42",
  cardBackground: "#FFFFFF",
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

  creditSummaryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  creditSummaryItem: {
    alignItems: "center",
    flex: 1,
  },
  creditSummaryTitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  creditSummaryValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.textPrimary,
  },
  summaryDivider: {
    width: 1,
    height: "80%",
    backgroundColor: COLORS.divider,
  },

  cardListContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  cardItem: {
    backgroundColor: COLORS.cardBackground,
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.divider,
    // Sombra sutil
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  cardLogoInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  cardLogoText: {
    fontSize: 14,
    fontWeight: "900",
    marginRight: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,

    backgroundColor: COLORS.white,
  },

  nubankLogo: {
    flexDirection: "row",
    marginRight: 10,
  },
  nubankCircleRed: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "#CC0000",
    marginRight: -5,
  },
  nubankCircleOrange: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "#FF6200",
  },

  cardTitleSubtitle: {
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.textPrimary,
  },
  cardSubtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  cardBalanceOptions: {
    alignItems: "flex-end",
  },
  cardBalanceText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.greenBalance,
    marginTop: 5,
  },

  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: COLORS.divider,
    borderRadius: 4,
    overflow: "hidden",
    flexDirection: "row",
    marginRight: 10,
    flex: 1,
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 4,
  },
  progressPercentageText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    width: 30,
    textAlign: "right",
  },

  cardActionRow: {
    alignItems: "flex-end",
    marginTop: 5,
  },
  cardActionText: {
    fontSize: 14,
    color: COLORS.secondaryDark,
    fontWeight: "600",
  },

  registerButtonContainer: {
    alignItems: "center",
    marginTop: 40,
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

  fab: {
    position: "absolute",
    bottom: 50,
    zIndex: 10,
    alignSelf: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.white,
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
    color: COLORS.secondaryDark,
    fontWeight: "300",
    top: -5,
  },

  // --- Bottom Navigation (Reutilizado) ---
  bottomNav: {
    position: "relative",
    flexDirection: "row",
    backgroundColor: COLORS.secondaryDark,
    paddingVertical: 12,
    paddingBottom: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  navItemEmpty: {
    width: 60,
    height: 60,
    position: "relative",
    top: -20,
  },

  bottomSpacing: {
    height: 120,
  },
});
