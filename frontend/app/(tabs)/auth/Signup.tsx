import React, { useState, useEffect } from "react";
import {
  View,
  Keyboard,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import InputField from "@/src/components/uiComponents/InputField";
import { colors } from "@/src/constants/colors";
import MainButton from "@/src/components/uiComponents/MainButton";
import { router } from "expo-router";

export default function SignupScreen() {
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
  const handleSignup = () => {
    console.log({ email, username, password });
  };

  return (
    // <KeyboardAvoidingView
    //   style={styles.container}
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    // >
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={[styles.title, { fontSize: keyboardVisible ? 24 : 48 }]}>
          Create your account! 👋
        </Text>

        <View>
          <InputField
            icon="👤"
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            label="Enter Your Name"
          />

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
          title="Create Account"
          disabled={disabled}
        />

        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/(tabs)/auth/Login")}>
            <Text style={styles.loginLink}>Log in</Text>
          </TouchableOpacity>
        </View>
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
  topContainer: {
    flex: 1,
    gap: 48,
  },
  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginText: {
    fontFamily: "MontserratSemiBold",
    color: "#888",
  },

  loginLink: {
    fontSize: 14,
    color: colors.accentBg,
    fontFamily: "MontserratBold",
  },
});
