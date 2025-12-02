import { View, Text, TouchableOpacity, Modal } from "react-native";
import {
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { styles } from "./style";
import { useState } from "react";

const CreditCardItem = ({
  logoName,
  logoColor,
  title,
  valueDescription,
  partialValue,
  progressBarColor,
  progressPercentage,
  actionText,
  logoType,
}) => (
  <View style={styles.cardItem}>
    <View style={styles.cardHeader}>
      <View style={styles.cardLogoInfo}>
        {logoType === "Visa" && (
          <Text style={[styles.cardLogoText, { color: "#1B2C63" }]}>VISA</Text>
        )}
        {logoType === "Nubank" && (
          <View style={styles.nubankLogo}>
            <View style={styles.nubankCircleRed} />
            <View style={styles.nubankCircleOrange} />
          </View>
        )}
        <View style={styles.cardTitleSubtitle}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardSubtitle}>{valueDescription}</Text>
        </View>
      </View>
      <View style={styles.cardBalanceOptions}>
        <Feather name="more-horizontal" size={20} color="#999" />
        <Text
          style={[
            styles.cardBalanceText,
            {
              color:
                partialValue === "R$ 0,00"
                  ? "#999"
                  : styles.cardBalanceText.color,
            },
          ]}
        >
          {partialValue}
        </Text>
      </View>
    </View>

    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBarBackground, { width: "80%" }]}>
        <View
          style={[
            styles.progressBarFill,
            {
              width: `${progressPercentage}%`,
              backgroundColor: progressBarColor,
            },
          ]}
        />
      </View>

      <Text style={styles.progressPercentageText}>{progressPercentage}%</Text>
    </View>

    <View style={styles.cardActionRow}>
      <TouchableOpacity>
        <Text style={styles.cardActionText}>{actionText}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function CreditCardsScreen() {
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
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
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
        </View>

        <TouchableOpacity style={{ position: "absolute", right: 20, top: 35 }}>
          <Ionicons name="settings-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo Principal */}
      <View style={styles.container}>
        {/* Resumo de Limite e Fatura */}
        <View style={styles.creditSummaryContainer}>
          <View style={styles.creditSummaryItem}>
            <Text style={styles.creditSummaryTitle}>Limite disponível</Text>
            <Text style={styles.creditSummaryValue}>R$ 10.000,00</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.creditSummaryItem}>
            <Text style={styles.creditSummaryTitle}>
              Saldo total das faturas
            </Text>
            <Text style={styles.creditSummaryValue}>R$ 1.500,00</Text>
          </View>
        </View>

        {/* Lista de Cartões */}
        <View style={styles.cardListContainer}>
          <CreditCardItem
            logoName="VISA"
            logoType="Visa"
            title="Itaú Click"
            valueDescription="Valor Parcial"
            partialValue="R$ 1.500,00"
            progressBarColor="#5CB85C"
            progressPercentage={30}
            actionText="Adicionar despesa"
          />
          <CreditCardItem
            logoName="Nubank"
            logoType="Nubank"
            title="Nubank"
            valueDescription="Valor Parcial"
            partialValue="R$ 0,00"
            progressBarColor="#999"
            progressPercentage={0}
            actionText="Fatura zerada"
          />
          <View style={styles.bottomSpacing} />
        </View>

        <View style={styles.registerButtonContainer}>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Cadastrar cartão</Text>
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
