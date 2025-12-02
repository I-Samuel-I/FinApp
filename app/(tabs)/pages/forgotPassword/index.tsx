import { Text, TextInput, TouchableOpacity, View } from "react-native";
import forgotPasswordStyle from "./style";
import { useRouter } from "expo-router";

export default function ForgotPasswordScreen() {
  const router = useRouter();
  
  return (
    <View style={forgotPasswordStyle.main}>
      <View style={forgotPasswordStyle.headerTitle}>
        <Text style={forgotPasswordStyle.title}>Finapp</Text>
      </View>

      <View style={forgotPasswordStyle.forms}>
        <View style={forgotPasswordStyle.descriptionContainer}>
          <Text style={forgotPasswordStyle.heading}>Esqueceu sua senha?</Text>
          <Text style={forgotPasswordStyle.description}>
            Digite seu e-mail abaixo e enviaremos instruções para redefinir sua
            senha.
          </Text>
        </View>

        <View style={forgotPasswordStyle.inputContainer}>
          <View style={forgotPasswordStyle.inputField}>
            <TextInput
              placeholder="E-mail"
              style={forgotPasswordStyle.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <TouchableOpacity style={forgotPasswordStyle.buttonSubmit}>
          <Text style={forgotPasswordStyle.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={forgotPasswordStyle.backToLoginContainer}
          onPress={() => {
            router.push("/(tabs)/login");
          }}
        >
          <Text style={forgotPasswordStyle.backToLoginText}>
            Voltar para o login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
