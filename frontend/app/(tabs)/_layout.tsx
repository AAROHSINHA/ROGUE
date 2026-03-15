// app/(tabs)/_layout.tsx
import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen
        name="SplashScreen"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen name="SignupScreen" />
      <Stack.Screen name="LoginScreen" />
    </Stack>
  );
}
