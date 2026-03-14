import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import AbstractConstellation from "@/src/components/uiComponents/splashScreenAnimation";
import { Colors } from "@/constants/theme";
import { colors } from "@/src/constants/colors";

const { width, height } = Dimensions.get("window");

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const titleY = useRef(new Animated.Value(30)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const creditOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    Animated.parallel([
      Animated.timing(titleY, {
        toValue: 0,
        duration: 700,
        delay: 300,
        useNativeDriver: true,
      }),
      Animated.timing(titleOpacity, {
        toValue: 1,
        duration: 700,
        delay: 300,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.timing(subtitleOpacity, {
      toValue: 1,
      duration: 600,
      delay: 700,
      useNativeDriver: true,
    }).start();
    Animated.timing(creditOpacity, {
      toValue: 1,
      duration: 600,
      delay: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, titleY, titleOpacity, subtitleOpacity, creditOpacity]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0C14" />

      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <AbstractConstellation />

        {/* ── Text Block ── */}
        <View style={styles.textBlock}>
          <Animated.Text
            style={[
              styles.title,
              { opacity: titleOpacity, transform: [{ translateY: titleY }] },
            ]}
          >
            ROGUE
          </Animated.Text>
          <Animated.Text style={[styles.tagline, { opacity: subtitleOpacity }]}>
            Track Your Gains & Grow
          </Animated.Text>
        </View>

        {/* ── Bottom ── */}
        <View style={styles.bottomBlock}>
          <ActivityIndicator
            size="small"
            color="#C0392B"
            style={styles.loader}
          />
          <Animated.Text style={[styles.credit, { opacity: creditOpacity }]}>
            By Aaroh Sinha
          </Animated.Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBg,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: height * 0.07,
  },
  textBlock: {
    alignItems: "center",
    paddingHorizontal: 32,
  },
  title: {
    fontSize: width * 0.16,

    color: "#FFFFFF",
    letterSpacing: width * 0.025,
    textAlign: "center",
    lineHeight: width * 0.18,
    fontFamily: "MontserratBold",
  },
  tagline: {
    marginTop: 10,
    fontSize: width * 0.042,
    color: "rgba(200,205,215,0.72)",
    fontFamily: "MontserratSemiBold",
    letterSpacing: 0.6,
    textAlign: "center",
  },
  bottomBlock: {
    alignItems: "center",
    gap: 16,
  },
  loader: {
    transform: [{ scale: 1.2 }],
  },
  credit: {
    fontSize: width * 0.034,
    color: "rgba(160,165,180,0.4)",
    fontWeight: "600",
    fontFamily: "MontserratExtraLight",
    letterSpacing: 8,
    textTransform: "uppercase",
  },
});
