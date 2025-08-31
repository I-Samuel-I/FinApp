import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import style from "./style";
import { useState } from "react";

export default function LoginScreen() {
  const [login, loginSet] = useState(true);

  const toogleLogin = () => {
    loginSet(!login);
  };

  if (!login) {
    return(
        <>
         <View style={style.main}>
        <View style={style.headerTitle}>
          <Text style={style.title}>FinApp</Text>
        </View>
        <View style={style.forms}>
          <TouchableOpacity style={style.choiceContainer} onPress={toogleLogin}>
            <Text>Login</Text>
            <Text>Cadastre-se</Text>
          </TouchableOpacity>

          <View style={style.inputCointaner}>
            <View style={style.inputEmail}>
              <TextInput placeholder="E-mail" />
            </View>
            <View style={style.inputPassword}>
              <TextInput placeholder="Senha" secureTextEntry={true} />
            </View>
            <View style={style.inputPassword}>
                <TextInput placeholder="Confirme sua senha" secureTextEntry={true} />
            </View>
          </View>

          <TouchableOpacity style={style.buttonLogin}>
            <Text style={style.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={style.googleContainer}>
              <Image
                source={require("../../../../assets/images/google.png")}
                style={{ width: 30, height: 30 }}
                accessibilityLabel="Google logo"
              />
              <Text style={{ fontSize: 20 }}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
        </>
    )
  }

  return (
    <>
      <View style={style.main}>
        <View style={style.headerTitle}>
          <Text style={style.title}>FinApp</Text>
        </View>
        <View style={style.forms}>
          <TouchableOpacity style={style.choiceContainer} onPress={toogleLogin}>
            <Text>Login</Text>
            <Text>Cadastre-se</Text>
          </TouchableOpacity>

          <View style={style.inputCointaner}>
            <View style={style.inputEmail}>
              <TextInput placeholder="E-mail" />
            </View>
            <View style={style.inputPassword}>
              <TextInput placeholder="Senha" secureTextEntry={true} />
            </View>
          </View>

          <TouchableOpacity style={style.buttonLogin}>
            <Text style={style.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <Text style={style.forgotText}>Esqueceu sua senha?</Text>
          <View>
            <TouchableOpacity style={style.googleContainer}>
              <Image
                source={require("../../../../assets/images/google.png")}
                style={{ width: 30, height: 30 }}
                accessibilityLabel="Google logo"
              />
              <Text style={{ fontSize: 20 }}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
