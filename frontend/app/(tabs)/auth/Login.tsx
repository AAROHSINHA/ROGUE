import React, { useState, useEffect } from "react";
import {
  View,
  Keyboard,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import InputField from "@/src/components/uiComponents/InputField";
import { colors } from "@/src/constants/colors";
import MainButton from "@/src/components/uiComponents/MainButton";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const show = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });

    const hide = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  return (
    // <KeyboardAvoidingView
    //   style={styles.container}
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    // >
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View>
          <Text style={[styles.title, { fontSize: keyboardVisible ? 24 : 48 }]}>
            Welcome Back! 🥂
          </Text>
          <Text style={styles.subtitle}>
            Please enter your details to log in!
          </Text>
        </View>

        <View>
          <InputField
            icon="✉"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            label="Enter Your Email"
          />

          <InputField
            icon="🔒"
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            label="Enter Your Password"
          />
        </View>
      </View>
      <View>
        <MainButton
          onPress={() => {
            setDisabled((prev) => !prev);
          }}
          title="Login"
          disabled={disabled}
        />

        <Text style={styles.loginText}>
          <Text style={styles.loginLink}>Forgot Password?</Text>
        </Text>
      </View>
      {/* </KeyboardAvoidingView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBg,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 48,
  },

  title: {
    fontFamily: "MontserratBold",
    // backgroundColor: "red",
    color: "#fff",
    marginTop: 32,
  },
  subtitle: {
    fontFamily: "MontserratMedium",
    opacity: 0.6,
    color: "#fff",
  },

  topContainer: {
    flex: 1,
    gap: 48,
  },

  loginText: {
    marginTop: 20,
    textAlign: "center",
    fontFamily: "MontserratSemiBold",
    color: "#888",
  },

  loginLink: {
    fontSize: 14,
    color: colors.accentBg,
    fontFamily: "MontserratBold",
  },
});
