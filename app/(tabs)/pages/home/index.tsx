import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  Modal,
} from "react-native";
import { styles } from "./style";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";

export default function HomeScreen() {
  const [options, setOptions] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toogleOptions = () => {
    setOptions(!options);
    setModalVisible(!modalVisible);
  };

  const transactions = [
    {
      id: 1,
      icon: "shopping-cart",
      name: "Supermercado",
      amount: -300.0,
      color: "#FF6B6B",
    },
    { id: 2, icon: "wifi", name: "Internet", amount: -90.0, color: "#FF6B6B" },
    { id: 3, icon: "heart", name: "Saúde", amount: -150.0, color: "#FF6B6B" },
    {
      id: 4,
      icon: "dollar-sign",
      name: "Salário",
      amount: 4000.0,
      color: "#4CAF50",
    },
  ];

  const categories = [
    { name: "Casa", color: "#1976D2" },
    { name: "Alimentação", color: "#D32F2F" },
    { name: "Educação", color: "#9C27B0" },
    { name: "Lazer", color: "#FFA000" },
    { name: "Serviços", color: "#795548" },
  ];

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

      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.avatarButton}>
            <Text style={styles.avatarIcon}>👤</Text>
          </TouchableOpacity>

          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Bom dia,</Text>
            <Text style={styles.userName}>Eduardo!</Text>
          </View>

          <TouchableOpacity style={styles.notificationButton}>
            <Feather name="bell" size={30} color="#FFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Saldo Total</Text>
          <Text style={styles.balanceAmount}>R$ 2.000,00</Text>

          <View style={styles.summaryRow}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Receitas</Text>
              <Text style={styles.incomeAmount}>R$ 4.000,00</Text>
            </View>

            <View style={styles.summaryDivider} />

            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Despesas</Text>
              <Text style={styles.expenseAmount}>R$ 2.000,00</Text>
            </View>
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Últimas transações</Text>

          <View style={styles.transactionsList}>
            {transactions.map((transaction) => (
              <View key={transaction.id} style={styles.transactionItem}>
                <View style={styles.transactionLeft}>
                  <View style={styles.transactionIcon}>
                    <Feather
                      name={transaction.icon}
                      size={20}
                      color={transaction.color}
                    />
                  </View>
                  <Text style={styles.transactionName}>{transaction.name}</Text>
                </View>
                <Text
                  style={[
                    styles.transactionAmount,
                    { color: transaction.color },
                  ]}
                >
                  R$ {transaction.amount > 0 ? "+" : ""}
                  {transaction.amount.toFixed(2).replace(".", ",")}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Expenses by Category */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Despesas por categoria</Text>

          <View style={styles.chartContainer}>
            <View>
              <Image
                source={require("../../../../assets/images/pizza.png")}
                accessibilityLabel="Pizza"
                style={styles.pizza}
              />
            </View>

            <View style={styles.legend}>
              {categories.map((category, index) => (
                <View key={index} style={styles.legendItem}>
                  <View
                    style={[
                      styles.legendDot,
                      { backgroundColor: category.color },
                    ]}
                  />
                  <Text style={styles.legendText}>{category.name}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.bottomSpacing} />
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
