// app/(tabs)/_layout.tsx
import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="SplashScreen"
        options={{ title: "Home", headerShown: false }}
      />
    </Stack>
  );
}
