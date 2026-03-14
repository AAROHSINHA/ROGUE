import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { fonts } from "@/src/constants/fonts";
import { Slot } from "expo-router";
export default function RootLayout() {
  const [loaded] = useFonts(fonts);
  console.log(fonts);
  if (!loaded) return null;

  return <Slot />;
}
