import { StyleSheet } from "react-native";

const COLORS = {
  primaryDark: "#102338",
  secondaryDark: "#1A2A42",
  textPrimary: "#1A1A1A",
  textSecondary: "#888",
  background: "#F5F5F5",
  contentBackground: "#F9F8F5",
  white: "#FFFFFF",
  goalsPrimary: "#4BB543",
  goalsTabPillActiveBg: "#FFFFFF",
  goalsTabPillInactiveBg: "#435263",
  registerButton: "#1A2A42",
  divider: "#E0E0E0",
  actionButtonBorder: "#DDD",
};

export const styles = StyleSheet.create({
  colors: COLORS,

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    backgroundColor: COLORS.primaryDark,
    paddingVertical: 35,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  headerBack: {
    position: "absolute",
    left: 10,
    top: 40,
    padding: 10,
    zIndex: 1,
  },
  headerButton: {
    backgroundColor: COLORS.secondaryDark,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignSelf: "center",
  },
  headerButtonText: {
    color: COLORS.white,
    fontSize: 14,
  },

  goalsTabSelectorContainer: {
    backgroundColor: COLORS.primaryDark,
    paddingVertical: 10,
    alignItems: "center",
  },
  goalsTabPills: {
    flexDirection: "row",
    backgroundColor: COLORS.secondaryDark,
    borderRadius: 20,
    padding: 3,
  },
  goalsTabPill: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 18,
    minWidth: 100,
    alignItems: "center",
  },
  goalsTabPillActive: {
    backgroundColor: COLORS.goalsTabPillActiveBg,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  goalsTabPillText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  goalsTabPillTextActive: {
    color: COLORS.primaryDark,
  },
  goalsTabPillTextInactive: {
    color: COLORS.white,
  },

  activeGoalsListContainer: {
    paddingHorizontal: 0,
    backgroundColor: COLORS.contentBackground,
  },
  goalsSummaryContainer: {
    backgroundColor: COLORS.white,
    padding: 20,
  },
  goalsSummaryClosest: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 5,
  },
  goalsSummaryTargetName: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primaryDark,
    marginBottom: 20,
    textAlign: "center",
  },
  goalsSummaryTotals: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  goalsSummaryItem: {
    alignItems: "center",
    flex: 1,
  },
  goalsSummaryTitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  goalsSummaryValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.textPrimary,
  },
  summaryDivider: {
    width: 1,
    height: "100%",
    backgroundColor: COLORS.divider,
    marginHorizontal: 10,
  },

  goalsListWrapper: {
    padding: 20,
    paddingTop: 10,
  },
  goalCard: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.divider,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  goalCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  goalCardIcon: {
    marginRight: 10,
  },
  goalCardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  goalCardOptions: {
    padding: 5,
  },

  progressBarContainer: {
    marginBottom: 10,
  },
  progressBarInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  progressBarText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  progressBarPercentage: {
    fontSize: 12,
    color: COLORS.goalsPrimary,
    fontWeight: "bold",
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: COLORS.divider,
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 4,
  },

  goalCardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalCardDeadline: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  goalCardActionButton: {
    borderWidth: 1,
    borderColor: COLORS.actionButtonBorder,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  goalCardActionText: {
    fontSize: 14,
    color: COLORS.goalsPrimary,
    fontWeight: "600",
  },

  containerPlaceholder: {
    backgroundColor: COLORS.contentBackground,
  },
  contentContainerPlaceholder: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
  },
  emptyPlaceholderContainer: {
    alignItems: "center",

    width: "100%",
  },
  imagePlaceholder: {
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: COLORS.contentBackground,
  },
  emptyPlaceholderTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.primaryDark,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20,
    lineHeight: 30,
  },
  emptyPlaceholderSubtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: "center",
    maxWidth: 300,
    marginBottom: 50,
  },

  registerGoalContainer: {
    position: "absolute",
    bottom: 150,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 5,
  },
  registerButton: {
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

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    backgroundColor: COLORS.secondaryDark,
    paddingVertical: 12,
    paddingBottom: 20,
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 5,
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
    height: 150,
  },
});
