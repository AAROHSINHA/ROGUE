import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const ORB_SIZE = width * 0.26;
const ORBIT_SIZE = width * 0.52;
const SEC_ORB = width * 0.18;

export default function AbstractConstellation() {
  const shape1Y = useRef(new Animated.Value(0)).current;
  const shape2Y = useRef(new Animated.Value(0)).current;
  const shape3Y = useRef(new Animated.Value(0)).current;
  const shape4Scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const floatShape = (
      anim: Animated.Value,
      range: number,
      duration: number,
    ) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: -range, // Move Up
            duration,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0, // Return to Center smoothly
            duration,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: range, // Move Down
            duration,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0, // Return to Center smoothly
            duration,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    const pulseShape = (anim: Animated.Value) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: 1.1, // Pulse out
            duration: 1800,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 1, // Return to normal
            duration: 1800,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0.9, // Pulse in
            duration: 1800,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 1, // Return to normal
            duration: 1800,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    // I slightly lowered the durations since we added more steps to the cycle,
    // keeping the overall speed feeling about the same.
    floatShape(shape1Y, 10, 1400);
    floatShape(shape2Y, 14, 1800);
    floatShape(shape3Y, 8, 2000);
    pulseShape(shape4Scale);
  }, [shape1Y, shape2Y, shape3Y, shape4Scale]);
  return (
    <View style={styles.abstractArea}>
      {/* Scatter dots */}
      <View style={[styles.dot, styles.dotSm, { top: "5%", left: "18%" }]} />
      <View style={[styles.dot, styles.dotXs, { top: "12%", right: "22%" }]} />
      <View style={[styles.dot, styles.dotSm, { top: "55%", left: "10%" }]} />
      <View style={[styles.dot, styles.dotXs, { top: "70%", right: "15%" }]} />
      <View style={[styles.dot, styles.dotMd, { top: "20%", right: "8%" }]} />

      {/* Dash accents */}
      <View
        style={[
          styles.dash,
          { top: "15%", left: "30%", transform: [{ rotate: "-45deg" }] },
        ]}
      />
      <View
        style={[
          styles.dash,
          styles.dashShort,
          { top: "60%", right: "25%", transform: [{ rotate: "30deg" }] },
        ]}
      />
      <View
        style={[
          styles.dash,
          styles.dashShort,
          { top: "8%", right: "38%", transform: [{ rotate: "70deg" }] },
        ]}
      />

      {/* Ring outlines */}
      <Animated.View
        style={[
          styles.ring,
          styles.ringLg,
          { top: "3%", left: "5%", transform: [{ translateY: shape3Y }] },
        ]}
      />
      <Animated.View
        style={[
          styles.ring,
          styles.ringSm,
          { bottom: "8%", right: "10%", transform: [{ translateY: shape2Y }] },
        ]}
      />
      <Animated.View
        style={[
          styles.ring,
          styles.ringMd,
          { bottom: "12%", left: "12%", transform: [{ translateY: shape1Y }] },
        ]}
      />

      {/* Central large orbit ring */}
      <Animated.View
        style={[styles.orbitRing, { transform: [{ translateY: shape1Y }] }]}
      />

      {/* Main red orb */}
      <Animated.View
        style={[
          styles.mainOrb,
          { transform: [{ scale: shape4Scale }, { translateY: shape2Y }] },
        ]}
      />

      {/* Secondary white orb */}
      <Animated.View
        style={[styles.secondaryOrb, { transform: [{ translateY: shape3Y }] }]}
      />

      {/* Small accent orb */}
      <View style={styles.accentOrbSm} />
    </View>
  );
}

const styles = StyleSheet.create({
  abstractArea: {
    width: width,
    height: height * 0.48,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  orbitRing: {
    position: "absolute",
    width: ORBIT_SIZE,
    height: ORBIT_SIZE,
    borderRadius: ORBIT_SIZE / 2,
    borderWidth: 1.5,
    borderColor: "rgba(192,57,43,0.35)",
    alignSelf: "center",
    top: "50%",
    marginTop: -(ORBIT_SIZE / 2) - 20,
  },
  mainOrb: {
    position: "absolute",
    width: ORB_SIZE,
    height: ORB_SIZE,
    borderRadius: ORB_SIZE / 2,
    backgroundColor: "#C0392B",
    shadowColor: "#C0392B",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 28,
    elevation: 20,
    alignSelf: "center",
    top: "50%",
    marginTop: -(ORB_SIZE / 2) - 24,
  },
  secondaryOrb: {
    position: "absolute",
    width: SEC_ORB,
    height: SEC_ORB,
    borderRadius: SEC_ORB / 2,
    backgroundColor: "#E8E8E8",
    shadowColor: "#ffffff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 10,
    alignSelf: "center",
    top: "50%",
    marginTop: ORB_SIZE / 2 - 30,
  },
  accentOrbSm: {
    position: "absolute",
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#ffffff",
    right: width * 0.28,
    top: "55%",
    marginTop: 0,
  },
  ring: {
    position: "absolute",
    borderWidth: 1.2,
    borderColor: "rgba(255,255,255,0.18)",
    borderRadius: 999,
  },
  ringLg: { width: 64, height: 64, top: "6%", left: "8%" },
  ringMd: { width: 44, height: 44 },
  ringSm: { width: 32, height: 32 },
  dot: {
    position: "absolute",
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.55)",
  },
  dotXs: { width: 5, height: 5 },
  dotSm: { width: 7, height: 7 },
  dotMd: { width: 10, height: 10 },
  dash: {
    position: "absolute",
    width: 22,
    height: 2,
    borderRadius: 1,
    backgroundColor: "rgba(255,255,255,0.45)",
  },
  dashShort: { width: 14 },
});
