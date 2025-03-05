import { createContext, ReactNode, useState } from "react"

export type Habit = {
    name: string;
    completed: boolean;
    categoryId?: number
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
    const [habits, setHabits] = useState<Habit[]>(
        [
            { name: "Wakeup early", completed: false, categoryId: 3 },
            { name: "Gym", completed: true, categoryId: 1 }
        ])
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