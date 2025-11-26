import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { styles } from "./style";

const activeGoals = [
  {
    id: 1,
    name: "Fundo de Emergência",
    target: 20000.0,
    saved: 6000.0,
    deadline: "31 de Dezembro de 2025",
    icon: { name: "dollar-sign", type: "Feather", color: "#4BB543" },
  },
];

const formatCurrency = (value) =>
  `R$ ${value
    .toFixed(2)
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
const calculateProgress = (saved, target) => Math.round((saved / target) * 100);

const ActiveGoalCard = ({ goal }) => {
  const progress = calculateProgress(goal.saved, goal.target);
  const activeProgressColor = styles.colors.goalsPrimary;

  const IconComponent =
    goal.icon.type === "MaterialIcons"
      ? MaterialIcons
      : goal.icon.type === "FontAwesome5"
      ? FontAwesome5
      : Feather;

  return (
    <View style={styles.goalCard}>
      <View style={styles.goalCardHeader}>
        <View style={styles.goalCardIcon}>
          <IconComponent
            name={goal.icon.name}
            size={18}
            color={goal.icon.color}
          />
        </View>
        <Text style={styles.goalCardTitle}>{goal.name}</Text>
        <TouchableOpacity style={styles.goalCardOptions}>
          <Feather name="more-horizontal" size={20} color="#999" />
        </TouchableOpacity>
      </View>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarInfo}>
          <Text style={styles.progressBarText}>
            {formatCurrency(goal.saved)} / {formatCurrency(goal.target)}
          </Text>
          <Text style={styles.progressBarPercentage}>{progress}%</Text>
        </View>
        <View style={styles.progressBarBackground}>
          <View
            style={[
              styles.progressBarFill,
              {
                width: `${progress}%`,
                backgroundColor: activeProgressColor,
              },
            ]}
          />
        </View>
      </View>

      <View style={styles.goalCardFooter}>
        <Text style={styles.goalCardDeadline}>Data final: {goal.deadline}</Text>
        <TouchableOpacity style={styles.goalCardActionButton}>
          <Text style={styles.goalCardActionText}>Adicionar depósito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const GoalsSummary = () => (
  <View style={styles.goalsSummaryContainer}>
    <Text style={styles.goalsSummaryClosest}>
      Seu objetivo mais próximo de ser alcançado é
    </Text>
    <Text style={styles.goalsSummaryTargetName}>Fundo de Emergência</Text>
    <View style={styles.goalsSummaryTotals}>
      <View style={styles.goalsSummaryItem}>
        <Text style={styles.goalsSummaryTitle}>Total em objetivos</Text>
        <Text style={styles.goalsSummaryValue}>R$ 20.000,00</Text>
      </View>
      <View style={styles.summaryDivider} />
      <View style={styles.goalsSummaryItem}>
        <Text style={styles.goalsSummaryTitle}>Total economizados</Text>
        <Text style={styles.goalsSummaryValue}>R$ 6.000,00</Text>
      </View>
    </View>
  </View>
);

const EmptyPlaceholder = ({ type }) => {
  let message = "";
  let subMessage = "";
  let visualIcon = null;

  if (type === "Pausados") {
    message = "Nenhum objetivo pausado por aqui!";
    subMessage = "Você está no controle dos seus planos.";
    visualIcon = (
      <FontAwesome5
        name="piggy-bank"
        size={150}
        color="#B0C4DE"
        style={{ position: "relative", top: 15 }}
      />
    );
  } else if (type === "Alcançados") {
    message = "Nenhum objetivo alcançado ainda";
    subMessage = "Continue firme, você está no caminho certo.";
    visualIcon = (
      <FontAwesome5 name="flag-checkered" size={150} color="#ADD8E6" />
    );
  }

  return (
    <View style={styles.emptyPlaceholderContainer}>
      <View style={styles.imagePlaceholder}>{visualIcon}</View>
      <Text style={styles.emptyPlaceholderTitle}>{message}</Text>
      <Text style={styles.emptyPlaceholderSubtitle}>{subMessage}</Text>
    </View>
  );
};

const ActiveGoalsContent = () => (
  <View style={styles.activeGoalsListContainer}>
    <GoalsSummary />
    <View style={styles.goalsListWrapper}>
      {activeGoals.map((goal) => (
        <ActiveGoalCard key={goal.id} goal={goal} />
      ))}
    </View>
  </View>
);

export default function GoalsScreen() {
  const [selectedTab, setSelectedTab] = useState("Ativos");

  const tabs = ["Ativos", "Pausados", "Alcançados"];
  const registerButtonColor = styles.colors.secondaryDark;

  const renderContent = () => {
    if (selectedTab === "Ativos") {
      return <ActiveGoalsContent />;
    } else if (selectedTab === "Pausados") {
      return <EmptyPlaceholder type="Pausados" />;
    } else if (selectedTab === "Alcançados") {
      return <EmptyPlaceholder type="Alcançados" />;
    }
    return null;
  };

  const isPlaceholderView = selectedTab !== "Ativos";

  return (
    <>
      <View style={styles.header}>
         <TouchableOpacity
          onPress={() => router.back()}
          style={{ position: "absolute", left: 20, top: 35 }}
        >
          <Feather name="chevron-left" size={25} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Objetivos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.goalsTabSelectorContainer}>
        <View style={styles.goalsTabPills}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.goalsTabPill,
                selectedTab === tab && styles.goalsTabPillActive,
              ]}
              onPress={() => setSelectedTab(tab)}
            >
              <Text
                style={[
                  styles.goalsTabPillText,
                  selectedTab === tab
                    ? styles.goalsTabPillTextActive
                    : styles.goalsTabPillTextInactive,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView
        style={[
          styles.container,
          isPlaceholderView && styles.containerPlaceholder,
        ]}
        contentContainerStyle={
          isPlaceholderView && styles.contentContainerPlaceholder
        }
      >
        {renderContent()}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      <View style={styles.registerGoalContainer}>
        <TouchableOpacity
          style={[
            styles.registerButton,
            { backgroundColor: registerButtonColor },
          ]}
        >
          <Text style={styles.registerButtonText}>Cadastrar Objetivo</Text>
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
