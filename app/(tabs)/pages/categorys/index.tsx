import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { styles } from "./style";

const expenseCategories = [
  {
    name: "Alimentação",
    icon: { name: "restaurant", type: "MaterialIcons", color: "#E60014" },
  },
  { name: "Casa", icon: { name: "home", type: "Feather", color: "#1E90FF" } },
  {
    name: "Educação",
    icon: { name: "book", type: "FontAwesome5", color: "#9370DB" },
  },
  {
    name: "Hobbies",
    icon: { name: "gamepad", type: "FontAwesome5", color: "#5F9EA0" },
  },
  { name: "Lazer", icon: { name: "sun", type: "Feather", color: "#DAA520" } },
  { name: "Saúde", icon: { name: "heart", type: "Feather", color: "#32CD32" } },
  {
    name: "Serviços",
    icon: { name: "clipboard", type: "Feather", color: "#A9A9A9" },
  },
  {
    name: "Supermercado",
    icon: { name: "shopping-cart", type: "FontAwesome5", color: "#FF4500" },
  },
  {
    name: "Transporte",
    icon: { name: "bus", type: "FontAwesome5", color: "#8B4513" },
  },
  {
    name: "Vestuário",
    icon: { name: "clipboard-outline", type: "Ionicons", color: "#E60014" },
  },
];

const incomeCategories = [
  {
    name: "Investimento",
    icon: { name: "trending-up", type: "Feather", color: "#228B22" },
  },
  {
    name: "Outros",
    icon: { name: "more-horizontal", type: "Feather", color: "#B8860B" },
  },
  {
    name: "Salário",
    icon: { name: "dollar-sign", type: "Feather", color: "#3CB371" },
  },
  {
    name: "Hobbies",
    icon: { name: "star", type: "Feather", color: "#4682B4" },
  },
];

const CategoryListItem = ({ category }) => {
  const IconComponent =
    category.icon.type === "MaterialIcons"
      ? MaterialIcons
      : category.icon.type === "FontAwesome5"
      ? FontAwesome5
      : Feather;

  return (
    <View style={styles.categoryItem}>
      <View style={styles.categoryInfo}>
        <View
          style={[
            styles.categoryIconCircle,
            { borderColor: category.icon.color },
          ]}
        >
          <IconComponent
            name={category.icon.name}
            size={20}
            color={category.icon.color}
          />
        </View>
        <Text style={styles.categoryName}>{category.name}</Text>
      </View>
      <TouchableOpacity>
        <Feather name="more-horizontal" size={20} color="#999" />
      </TouchableOpacity>
    </View>
  );
};

export default function CategoriesScreen() {
  const [selectedTab, setSelectedTab] = useState("Despesas");

  const isActiveTabExpenses = selectedTab === "Despesas";
  const activeColor = isActiveTabExpenses
    ? styles.colors.categoriesPrimary
    : styles.colors.categoriesIncome;
  const inactiveColor = isActiveTabExpenses
    ? styles.colors.categoriesIncome
    : styles.colors.categoriesPrimary;
  const currentCategories = isActiveTabExpenses
    ? expenseCategories
    : incomeCategories;

  return (
    <>
      {/* Header com cor dinâmica */}
      <View style={[styles.categoriesHeader, { backgroundColor: activeColor }]}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ position: "absolute", left: 20, top: 35 }}
        >
          <Feather name="chevron-left" size={25} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.categoriesHeaderTitle}>Categorias</Text>

        <TouchableOpacity style={{ position: "absolute", right: 20, top: 35 }}>
          <Ionicons name="settings-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Seletor de Abas Despesas/Receitas */}
      <View style={styles.tabSelectorContainer}>
        <View style={styles.tabPills}>
          <TouchableOpacity
            style={[
              styles.tabPill,
              isActiveTabExpenses && styles.tabPillActive,
              !isActiveTabExpenses && { backgroundColor: "transparent" },
            ]}
            onPress={() => setSelectedTab("Despesas")}
          >
            <Text
              style={[
                styles.tabPillText,
                isActiveTabExpenses
                  ? styles.tabPillTextActive
                  : { color: activeColor },
              ]}
            >
              Despesas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabPill,
              !isActiveTabExpenses && styles.tabPillActive,
              isActiveTabExpenses && { backgroundColor: "transparent" },
            ]}
            onPress={() => setSelectedTab("Receitas")}
          >
            <Text
              style={[
                styles.tabPillText,
                !isActiveTabExpenses
                  ? styles.tabPillTextActive
                  : { color: inactiveColor },
              ]}
            >
              Receitas
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.categoriesContainer}>
        {currentCategories.map((cat, index) => (
          <CategoryListItem key={index} category={cat} />
        ))}

        <View style={styles.bottomSpacing} />
      </ScrollView>

      <View style={styles.registerCategoryContainer}>
        <TouchableOpacity style={styles.registerCategoryButton}>
          <Text style={styles.registerButtonText}>Cadastrar categoria</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/pages/home")}
        >
          <Feather name="home" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/pages/transactions")}
        >
          <Feather name="list" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <View style={styles.navItemEmpty} />

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/pages/planned")}
        >
          <Feather name="clipboard" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/pages/moreoptions")}
        >
          <Feather name="more-horizontal" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </>
  );
}
