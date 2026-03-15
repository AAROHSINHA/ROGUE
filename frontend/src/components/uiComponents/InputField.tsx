import React from "react";
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  Text,
} from "react-native";

type Props = TextInputProps & {
  label?: string;
  icon?: string; // emoji icon
};

export default function InputField({ label, icon, style, ...props }: Props) {
  return (
    <View style={styles.container}>
      {label && (
        <View style={styles.labelRow}>
          <Text style={styles.label}>{label}</Text>
        </View>
      )}

      <View style={styles.inputWrapper}>
        {icon && <Text style={styles.icon}>{icon}</Text>}

        <TextInput
          {...props}
          style={[styles.input, style]}
          placeholderTextColor="#888"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },

  labelRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 6,
  },

  label: {
    fontSize: 12,
    color: "#aaa",
    fontFamily: "MontserratMedium",
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 10,
    backgroundColor: "#1a1a1a",
    height: 60,
    paddingHorizontal: 14,
  },

  icon: {
    fontSize: 16,
    marginRight: 10,
  },

  input: {
    flex: 1,
    color: "#fff",
    fontFamily: "MontserratMedium",
    fontSize: 15,
  },
});
