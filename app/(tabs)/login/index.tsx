import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import style from "./style";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [login, loginSet] = useState(true);
  const router = useRouter();

  const toogleLogin = () => {
    loginSet(!login);
  };

  if (!login) {
    return (
      <>
        <View style={style.main}>
          <View style={style.headerTitle}>
            <Text style={style.title}>Finapp</Text>
          </View>
          <View style={style.forms}>
            <View style={style.choiceContainer}>
              <TouchableOpacity style={style.tabInactive} onPress={toogleLogin}>
                <Text style={style.tabTextInactive}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.tabActive}>
                <Text style={style.tabTextActive}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>

            <View style={style.inputCointaner}>
              <View style={style.inputField}>
                <TextInput placeholder="E-mail" style={style.input} />
              </View>
              <View style={style.inputField}>
                <TextInput
                  placeholder="Senha"
                  secureTextEntry={true}
                  style={style.input}
                />
              </View>
              <View style={style.inputField}>
                <TextInput
                  placeholder="Confirme sua senha"
                  secureTextEntry={true}
                  style={style.input}
                />
              </View>
            </View>

            <TouchableOpacity
              style={style.buttonLogin}
              onPress={() => {
                router.push("/pages/home");
              }}
            >
              <Text style={style.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <View style={style.socialContainer}>
              <TouchableOpacity style={style.socialButton}>
                <Image
                  source={require("../../../assets/images/apple.png")}
                  style={style.socialIcon}
                  accessibilityLabel="Apple logo"
                />
              </TouchableOpacity>
              <TouchableOpacity style={style.socialButton}>
                <Image
                  source={require("../../../assets/images/google.png")}
                  style={style.socialIcon}
                  accessibilityLabel="Google logo"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }

  return (
    <>
      <View style={style.main}>
        <View style={style.headerTitle}>
          <Text style={style.title}>Finapp</Text>
        </View>
        <View style={style.forms}>
          <View style={style.choiceContainer}>
            <TouchableOpacity style={style.tabActive}>
              <Text style={style.tabTextActive}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabInactive} onPress={toogleLogin}>
              <Text style={style.tabTextInactive}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>

          <View style={style.inputCointaner}>
            <View style={style.inputField}>
              <TextInput placeholder="E-mail" style={style.input} />
            </View>
            <View style={style.inputField}>
              <TextInput
                placeholder="Senha"
                secureTextEntry={true}
                style={style.input}
              />
            </View>
          </View>

          <TouchableOpacity
            style={style.buttonLogin}
            onPress={() => {
              router.push("/pages/home");
            }}
          >
            <Text style={style.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <View style={style.forgotContainer}>
            <Text style={style.forgotText}>Esqueceu sua senha?</Text>
            <TouchableOpacity>
              <Text style={style.clickHereText}>Clique aqui</Text>
            </TouchableOpacity>
          </View>

          <View style={style.socialContainer}>
            <TouchableOpacity style={style.socialButton}>
              <Image
                source={require("../../../assets/images/apple.png")}
                style={style.socialIcon}
                accessibilityLabel="Apple logo"
              />
            </TouchableOpacity>
            <TouchableOpacity style={style.socialButton}>
              <Image
                source={require("../../../assets/images/google.png")}
                style={style.socialIcon}
                accessibilityLabel="Google logo"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
