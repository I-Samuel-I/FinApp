import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5, Feather } from "@expo/vector-icons";
import { styles } from "./style";
import { router } from "expo-router";

export default function MoreOptionsScreen() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Mais Opções</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsIcon}>
          <Ionicons name="settings-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* List */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        
        <TouchableOpacity style={styles.listItem}>
          <FontAwesome5 name="university" size={20} color="#1A1A1A" />
          <Text style={styles.listText}>Contas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem}>
          <MaterialIcons name="credit-card" size={22} color="#1A1A1A" />
          <Text style={styles.listText}>Cartões de crédito</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem}>
          <Feather name="bookmark" size={20} color="#1A1A1A" />
          <Text style={styles.listText}>Categorias</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem}>
          <Ionicons name="flag-outline" size={22} color="#1A1A1A" />
          <Text style={styles.listText}>Objetivos</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Overlay behind FAB */}
            <View style={styles.fabOverlay} pointerEvents="none" />
      
            {/* Floating Action Button */}
            <TouchableOpacity style={styles.fab}>
              <Text style={styles.fabIcon}>+</Text>
            </TouchableOpacity>
      
            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
              <TouchableOpacity style={styles.navItem}>
                <Feather
                  name="home"
                  size={24}
                  color="#FFFFFF"
                  onPress={() => {
                    router.push("/pages/home");
                  }}
                />
              </TouchableOpacity>
      
              <TouchableOpacity
                style={styles.navItem}
                onPress={() => {
                  router.push("/pages/transactions");
                }}
              >
                <Feather name="list" size={24} color="#FFFFFF" />
              </TouchableOpacity>
      
              <TouchableOpacity
                style={styles.navItem}
                onPress={() => {
                  router.push("/pages/planned");
                }}
              >
                <Feather name="clipboard" size={24} color="#FFFFFF" />
              </TouchableOpacity>
      
              <TouchableOpacity   
                style={styles.navItem}
                onPress={() => {
                  router.push("/pages/moreoptions");
                }}
              >
                <Feather name="more-horizontal" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        );
      }