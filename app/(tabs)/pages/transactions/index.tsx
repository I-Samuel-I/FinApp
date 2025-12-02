import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { styles } from "./style";
import { useState } from "react";

export default function Transactions() {
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState(false);

  const toogleOptions = () => {
    setOptions(!options);
    setModalVisible(!modalVisible);
  };
  const data = [
    {
      date: "Sábado, 31",
      items: [
        {
          icon: "credit-card",
          title: "Fatura Itaú Visa",
          value: "R$ 1.060,00",
          type: "out",
        },
      ],
    },
    {
      date: "Segunda-feira, 05",
      items: [
        {
          icon: "shopping-cart",
          title: "Supermercado",
          value: "R$ 300,00",
          type: "out",
        },
        { icon: "wifi", title: "Internet", value: "R$ 90,00", type: "out" },
        { icon: "heart", title: "Saúde", value: "R$ 150,00", type: "out" },
        {
          icon: "dollar-sign",
          title: "Salário",
          value: "R$ 4.000,00",
          type: "in",
        },
      ],
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

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Transações</Text>
          <Text style={styles.userName}>Maio</Text>
        </View>
      </View>

      <ScrollView style={styles.container}>
        {/* INPUT DE BUSCA */}
        <View style={styles.searchBox}>
          <Feather name="search" size={18} color="#999" />
          <TextInput placeholder="Buscar" style={styles.searchInput} />
        </View>

        {/* LISTA DE TRANSACOES */}
        {data.map((block, index) => (
          <View key={index} style={{ marginBottom: 20 }}>
            <Text style={styles.dateLabel}>{block.date}</Text>

            {block.items.map((item, idx) => (
              <View key={idx} style={styles.transactionRow}>
                <View style={styles.iconLabel}>
                  <Feather name={item.icon} size={20} color="#000" />
                  <Text style={styles.transactionTitle}>{item.title}</Text>
                </View>

                <Text
                  style={[
                    styles.transactionValue,
                    item.type === "in" ? styles.valueIn : styles.valueOut,
                  ]}
                >
                  {item.value}
                </Text>
              </View>
            ))}
          </View>
        ))}

        <View style={{ height: 120 }} />
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={toogleOptions}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>

      {/* FOOTER */}
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
