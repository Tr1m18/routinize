import { create } from "zustand";

export type Habit = {
  id: string;
  title: string;
  cue?: string;
  reward?: string;
  createdAt: string;
};

type State = {
  habits: Habit[];
  addHabit: (habit: Omit<Habit, "id" | "createdAt">) => void;
};

export const useHabits = create<State>((set) => ({
  habits: [
    {
      id: "demo-1",
      title: "Morning stretch",
      cue: "After waking",
      reward: "Energised",
      createdAt: new Date().toISOString(),
    },
  ],
  addHabit: (habit) =>
    set((state) => ({
      habits: [
        ...state.habits,
        {
          id: Math.random().toString(36).slice(2),
          createdAt: new Date().toISOString(),
          ...habit,
        },
      ],
    })),
}));
