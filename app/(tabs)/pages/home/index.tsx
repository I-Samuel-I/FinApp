import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./style"


export default function Home() {
  return (
    <>
      <View>
        {/* Header */}
        <View style={styles.header}>
          <Feather name="user" color="black" size={24} />
          <Text style={styles.headerText}>Bom dia, Eduardo!</Text>
          <Feather name="bell" color="black" size={24} />
        </View>
        {/* Container Principal */}
        <View>
          {/* Valores */}
          <View>
            {/* Saldo Total */}
            <View>
              <Text>Saldo Total</Text>
              <Text> R$ 2.000,00</Text>
            </View>
            <View>
              <Text>Receita</Text>
              <Text>R$ 4.000,00</Text>
            </View>
            <View>
              <Text>Despesas</Text>
              <Text>R$ 2.000,00</Text>
            </View>
          </View>
          {/* LISTA GERAL */}
          <View>
            <Text> Últimas transações</Text>
            {/* Lista unitária */}
            <View>
              <Feather name="shopping-cart" color="black" size={24} />
              <Text> Supermercado</Text>
              <Text> R$ 300,00</Text>
            </View>
            <View>
              <Feather name="wifi" color="black" size={24} />
              <Text> Internet</Text>
              <Text> R$ 90,00</Text>
            </View>
            <View>
              <Feather name="heart" color="black" size={24} />
              <Text> Saúde</Text>
              <Text> R$ 150,00</Text>
            </View>
            <View>
              <Feather name="dollar-sign" color="black" size={24} />
              <Text> Salário</Text>
              <Text> R$ + 4.000,00</Text>
            </View>
          </View>
        </View>
        {/* Despesa */}
        <View>
          <Text> Despesas por Categoria</Text>
          {/* Lista de Despesa */}
          <View>
            <Text> Casa</Text>
            <Text>Alimentação</Text>
            <Text>Educação</Text>
            <Text>Lazer</Text>
            <Text>Serviços</Text>
          </View>
        </View>
      </View>
    </>
  );
}
