import { createContext, ReactNode, useState } from "react"

type Habit = string
type HabitDataContextType = {
    habits: Habit[]
    addHabit: (habit: Habit) => void
    removeHabitAt: (index: number) => void
}

export const HabitContext = createContext<HabitDataContextType>({
    habits: [],
    addHabit: () => { },
    removeHabitAt: () => { }
})

export default function HabitProvider({ children }: { children: ReactNode }) {
    const [habits, setHabits] = useState<Habit[]>(['Wakeup early', 'Gym','Learn English'])
    const addHabit = (newHabit: Habit) => {
        // TODO: add new habit tto habits
    }
    const removeHabitAt = (index: number) => {
        // TODO: remove habit at index
    }
    return <HabitContext.Provider value={{ habits, addHabit, removeHabitAt }}>
        {children}
    </HabitContext.Provider>
}