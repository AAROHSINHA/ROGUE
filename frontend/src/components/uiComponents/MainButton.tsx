import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "@/src/constants/colors";

interface MainButtonInterface {
  onPress: () => void;
  title: string;
  disabled?: boolean;
}

export default function MainButton({
  onPress,
  title,
  disabled,
}: MainButtonInterface) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: disabled ? colors.secondaryText : colors.accentBg,
          opacity: pressed ? 0.85 : disabled ? 0.6 : 1,
        },
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,

    // Android
    elevation: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 4,
    fontFamily: "MontserratSemiBold",
  },
});
