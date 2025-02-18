import { createContext, ReactNode, useState } from "react"

type Habit = {
    name: string;
    completed: boolean;
}
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
    const [habits, setHabits] = useState<Habit[]>([{ name: "Wakeup early", completed: false }, { name: "Gym", completed: true }])
    const addHabit = (newHabit: Habit) => {
        setHabits([...habits, newHabit])
    }
    const removeHabitAt = (index: number) => {
        const newHabits = [...habits]
        newHabits.splice(index, 1) // removes habits[index]
        setHabits(newHabits)
    }
    return <HabitContext.Provider value={{ habits, addHabit, removeHabitAt }}>
        {children}
    </HabitContext.Provider>
}