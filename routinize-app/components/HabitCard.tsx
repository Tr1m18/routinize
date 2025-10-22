import { View, Text } from "react-native";
import type { Habit } from "../store/useHabits";

export default function HabitCard({ habit }: { habit: Habit }) {
  return (
    
    <View style={{ padding: 14, borderRadius: 12, borderWidth: 1, borderColor: "#e5e7eb", backgroundColor: "#fff", gap: 4 }}>
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{habit.title}</Text>
      {habit.cue ? <Text style={{ opacity: 0.7 }}>Cue: {habit.cue}</Text> : null}
      {habit.reward ? <Text style={{ opacity: 0.7 }}>Reward: {habit.reward}</Text> : null}
    </View>
  );
}
