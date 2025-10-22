import { View, Text, FlatList } from "react-native";
import HabitCard from "../components/HabitCard";
import { useHabits } from "../store/useHabits";
import { Link } from "expo-router";

export default function Home() {
  const habits = useHabits((state) => state.habits);

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>
        Welcome to Routinize 👋
      </Text>
      <Text>Identity‑driven habits. Small wins, big change.</Text>

      <FlatList
        data={habits}
        keyExtractor={(h) => h.id}
        renderItem={({ item }) => <HabitCard habit={item} />}
        contentContainerStyle={{ gap: 10, paddingTop: 4 }}
        ListEmptyComponent={
          <Text style={{ opacity: 0.7 }}>
            No habits yet — add one to get started.
          </Text>
        }
      />

      {/* Link placeholder for later steps */}
      <Link href="/add-habit" style={{ marginTop: 12, fontSize: 16 }}>
        + Add Habit
      </Link>

      <Link href="/journal" style={{ marginTop: 16, fontSize: 16, color: "#2e78b7" }}>
       Go to Journal →
      </Link>


    </View>
  );
}
