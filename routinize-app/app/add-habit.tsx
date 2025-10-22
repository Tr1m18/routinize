import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useHabits } from "../store/useHabits";

export default function AddHabit() {
  const router = useRouter();
  const addHabit = useHabits((s) => s.addHabit);

  const [title, setTitle] = useState("");
  const [cue, setCue] = useState("");
  const [reward, setReward] = useState("");

  const canSave = title.trim().length > 0;

  const onSave = () => {
    if (!canSave) return;
    addHabit({ title: title.trim(), cue: cue.trim() || undefined, reward: reward.trim() || undefined });
    router.replace("/"); // go back to Home
  };

  return (
    <View style={{ padding: 24, gap: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Add Habit</Text>

      <View style={{ gap: 6 }}>
        <Text>Title *</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="e.g., Morning stretch"
          style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 10 }}
        />
      </View>

      <View style={{ gap: 6 }}>
        <Text>Cue (optional)</Text>
        <TextInput
          value={cue}
          onChangeText={setCue}
          placeholder="After waking"
          style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 10 }}
        />
      </View>

      <View style={{ gap: 6 }}>
        <Text>Reward (optional)</Text>
        <TextInput
          value={reward}
          onChangeText={setReward}
          placeholder="Feel energised"
          style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 10 }}
        />
      </View>

      <Pressable
        onPress={onSave}
        disabled={!canSave}
        style={{
          backgroundColor: canSave ? "#111827" : "#9ca3af",
          padding: 14,
          borderRadius: 12,
          alignItems: "center",
          marginTop: 6,
        }}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>Save Habit</Text>
      </Pressable>
    </View>
  );
}
