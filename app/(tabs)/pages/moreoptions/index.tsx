import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
import { styles } from "./style";
import { router } from "expo-router";

export default function MoreOptionsScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState(false);

  const toogleOptions = () => {
    setOptions(!options);
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      {options && (
        <Modal visible={modalVisible} transparent animationType="fade">
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.623)",
              zIndex: 1,
            }}
          >
            <View
              style={{
                position: "absolute",
                bottom: 100,
                left: "15%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  padding: 20,
                }}
              >
                <Feather name="trending-up" size={20} color="black" />
              </View>
              <Text style={{ color: "white" }}>Receita</Text>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 100,
                right: "15%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  padding: 20,
                }}
              >
                <Feather name="trending-down" size={20} color="black" />
              </View>
              <Text style={{ color: "white" }}>Despesa</Text>
            </View>

            <View
              style={{
                position: "absolute",
                bottom: 190,
                right: "55%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  padding: 20,
                }}
              >
                <Feather name="repeat" size={20} color="black" />
              </View>
              <Text style={{ color: "white" }}>Transferência</Text>
            </View>

            <View
              style={{
                position: "absolute",
                bottom: 190,
                left: "55%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  padding: 20,
                }}
              >
                <Feather name="credit-card" size={20} color="black" />
              </View>
              <Text style={{ color: "white" }}>Despesa Cartão</Text>
            </View>

            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                width: 60,
                height: 60,
                borderRadius: 50,
                padding: 20,
                position: "absolute",
                bottom: 50,
                left: "50%",
                marginLeft: -30,
              }}
              onPress={toogleOptions}
            >
              <Feather name="x" size={35} color="#000" />
            </TouchableOpacity>
          </View>
        </Modal>
      )}

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Mais Opções</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ position: "absolute", right: 20, top: 40 }}>
          <Ionicons name="settings-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* List */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            router.push("/pages/accounts");
          }}
        >
          <FontAwesome5 name="university" size={20} color="#1A1A1A" />
          <Text style={styles.listText}>Contas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            router.push("/pages/credit");
          }}
        >
          <MaterialIcons name="credit-card" size={22} color="#1A1A1A" />
          <Text style={styles.listText}>Cartões de crédito</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            router.push("/pages/categorys");
          }}
        >
          <Feather name="bookmark" size={20} color="#1A1A1A" />
          <Text style={styles.listText}>Categorias</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            router.push("/pages/objectives");
          }}
        >
          <Ionicons name="flag-outline" size={22} color="#1A1A1A" />
          <Text style={styles.listText}>Objetivos</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Overlay behind FAB */}
      <View style={styles.fabOverlay} pointerEvents="none" />

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} onPress={toogleOptions}>
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
