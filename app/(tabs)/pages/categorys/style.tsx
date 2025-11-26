import { StyleSheet } from "react-native";

// Cores Padrão
const COLORS = {
  primaryDark: "#102338",
  secondaryDark: "#1A2A42",
  textPrimary: "#1A1A1A",
  textSecondary: "#888",
  background: "#F5F5F5",
  white: "#FFFFFF",
  registerButton: "#1A2A42",
  divider: "#E0E0E0",

  categoriesPrimary: "#E60014",
  categoriesIncome: "#4BB543",
  categoriesSecondary: "#FFEEEE",
  categoriesIncomeSecondary: "#EEFFEF",
};

export const styles = StyleSheet.create({
  colors: COLORS,

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 0,
    position: "relative",
  },

  categoriesHeader: {
    paddingVertical: 45,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  categoriesHeaderBack: {
    position: "absolute",
    left: 10,
    top: 40,
    padding: 10,
    zIndex: 1,
  },
  categoriesHeaderTitle: {
    position: "relative",
    top: 15,
    right: 20,
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginLeft: 30,
  },
  settingsIcon: {
    position: "absolute",
    right: 20,
    top: 40,
  },

  tabSelectorContainer: {
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  tabPills: {
    flexDirection: "row",

    backgroundColor: COLORS.divider,
    borderRadius: 20,
    padding: 3,
  },
  tabPill: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 18,
    minWidth: 120,
    alignItems: "center",
  },
  tabPillActive: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  tabPillText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  tabPillTextActive: {
    color: COLORS.white,
  },
  categoriesContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginBottom: 100,
  },
  categoryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  categoryInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryIconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  categoryName: {
    fontSize: 16,
    color: COLORS.textPrimary,
  },

  // --- Botão Cadastrar Categoria ---
  registerCategoryContainer: {
    position: "absolute",
    bottom: 120,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 5,
  },
  registerCategoryButton: {
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
    bottom: 30,
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
