import { View, Text, ScrollView, TouchableOpacity, Modal } from "react-native";
import { styles } from "./style";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
export default function Planned() {
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState(false);

  const toogleOptions = () => {
    setOptions(!options);
    setModalVisible(!modalVisible);
  };
  const categories = [
    {
      id: 1,
      icon: "dollar-sign",
      title: "Total",
      remaining: "R$ 1.400,00",
      spent: "R$ 1.600,00 de R$ 3.000,00",
      progress: 0.5,
    },
    {
      id: 2,
      icon: "shopping-cart",
      title: "Supermercado",
      remaining: "R$ 700,00",
      spent: "R$ 300,00 de R$ 1.000,00",
      progress: 0.3,
    },
    {
      id: 3,
      icon: "pie-chart",
      title: "Alimentação",
      remaining: "R$ 200,00",
      spent: "R$ 300,00 de R$ 500,00",
      progress: 0.6,
    },
    {
      id: 4,
      icon: "home",
      title: "Casa",
      remaining: "R$ 300,00",
      spent: "R$ 700,00 de R$ 1.000,00",
      progress: 0.7,
    },
    {
      id: 5,
      icon: "heart",
      title: "Saúde",
      remaining: "R$ 150,00",
      spent: "R$ 150,00 de R$ 300,00",
      progress: 0.5,
    },
    {
      id: 6,
      icon: "tag",
      title: "Demais Categorias",
      remaining: "R$ 550,00",
      spent: "R$ 150,00 de R$ 700,00",
      progress: 0.5,
    },
  ];

  return (
    <>
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
      <View style={styles.header}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Planejamento</Text>
          <Text style={styles.userName}>Maio</Text>
        </View>
      </View>

      <ScrollView style={styles.container}>
        <Text style={styles.title}>Planejamento Mensal</Text>

        {categories.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Feather name={item.icon} size={22} color="#000" />
              <View>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardRemaining}>
                  Restam {item.remaining}
                </Text>
              </View>
            </View>

            <View style={styles.progressBarBackground}>
              <View
                style={[
                  styles.progressBarFill,
                  { width: `${item.progress * 100}%` },
                ]}
              />
            </View>

            <Text style={styles.spentText}>{item.spent}</Text>
          </View>
        ))}

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} onPress={toogleOptions}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>

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
    </>
  );
}
