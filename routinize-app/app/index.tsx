import { View, Text } from "react-native";
import { useHabits } from "../store/useHabits";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>
        Welcome to Routinize 👋
      </Text>
      <Text>Identity‑driven habits. Small wins, big change.</Text>
      <Link href="/journal" style={{ marginTop: 16, fontSize: 16, color: "#2e78b7" }}>
       Go to Journal →
      </Link>


    </View>
  );
}
