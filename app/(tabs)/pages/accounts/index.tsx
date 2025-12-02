import { View, Text, TouchableOpacity, Modal } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { styles } from "./style";
import { useState } from "react";

const AccountListItem = ({
  iconName,
  iconType,
  title,
  subtitle,
  balance,
  iconColor,
}) => (
  <View style={styles.listItem}>
    <View style={styles.listItemIconContainer}>
      {iconType === "MaterialIcons" && (
        <MaterialIcons name={iconName} size={24} color={iconColor} />
      )}
      {iconType === "FontAwesome5" && (
        <FontAwesome5 name={iconName} size={24} color={iconColor} />
      )}
      {iconType === "Ionicons" && (
        <Ionicons name={iconName} size={24} color={iconColor} />
      )}

      {iconType === "Text" && (
        <Text
          style={[
            styles.listIconText,
            {
              color: iconColor,
              backgroundColor: iconName === "Itaú" ? "#FF6200" : "#E60014",
            },
          ]}
        >
          {iconName}
        </Text>
      )}
    </View>

    <View style={styles.listItemInfo}>
      <Text style={styles.listTitle}>{title}</Text>
      <Text style={styles.listSubtitle}>{subtitle}</Text>
    </View>

    <View style={styles.listItemBalance}>
      <Text style={styles.listBalanceText}>{balance}</Text>
      <TouchableOpacity>
        <Feather name="more-vertical" size={20} color="#999" />
      </TouchableOpacity>
    </View>
  </View>
);

export default function AccountsScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState(false);

  const toogleOptions = () => {
    setOptions(!options);
    setModalVisible(!modalVisible);
  };
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
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ position: "absolute", left: 20, top: 35 }}
        >
          <Feather name="chevron-left" size={25} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Contas</Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Feather name="chevron-left" size={20} color="#FFFFFF" />
          <Text style={styles.headerMonthText}>Maio</Text>
          <Feather name="chevron-right" size={20} color="#FFFFFF" />
        </View>

        <TouchableOpacity style={styles.settingsIcon}>
          <Ionicons name="settings-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo Principal */}
      <View style={styles.container}>
        {/* Saldo Total */}
        <View style={styles.totalBalanceContainer}>
          <Text style={styles.totalBalanceTitle}>Saldo atual total</Text>
          <View style={styles.totalBalanceRow}>
            <MaterialIcons name="paid" size={24} color="#5CB85C" />
            <Text style={styles.totalBalanceValue}>R$ 2.000,00</Text>
          </View>
        </View>

        <View style={styles.listContainer}>
          {/* Linha Divisória */}
          <View style={styles.listDivider} />

          {/* Lista de Contas */}
          <AccountListItem
            iconName="Itaú"
            iconType="Text"
            title="Itaú"
            subtitle="Saldo atual"
            balance="R$ 1.500,00"
            iconColor="#FFF"
          />
          <AccountListItem
            iconName="wallet"
            iconType="FontAwesome5"
            title="Carteira"
            subtitle="Saldo atual"
            balance="R$ 100,00"
            iconColor="#333"
          />
          <AccountListItem
            iconName="Ticket" // Simulação do logo Ticket
            iconType="Text"
            title="Vale Alimentação"
            subtitle="Saldo atual"
            balance="R$ 400,00"
            iconColor="#FFF"
          />
        </View>

        <View style={styles.registerButtonContainer}>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Cadastrar conta</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.fab} onPress={toogleOptions}>
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
