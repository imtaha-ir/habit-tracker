import { createContext, ReactNode, useEffect, useState } from "react"

export type Habit = {
    name: string;
    completed: boolean;
    completedToday?: boolean;
    lastDone: Date | null;
    categoryId?: number
    dayStreak:number
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
    const [habits, setHabits] = useState<Habit[]>([])
    const saveHabitsToLocalStorage = (habitsToSave: Habit[]) => {
        const strHabits = JSON.stringify(habitsToSave)
        localStorage.setItem('habits', strHabits)
    }
    const loadHabitsFromLocalStorage = () => {
        const strHabits = localStorage.getItem('habits')
        if (strHabits) {
            const savedHabits: Habit[] = JSON.parse(strHabits)
            setHabits(savedHabits)
        }
    }
    const addHabit = (newHabit: Habit) => {
        const habitsToSave=[...habits, newHabit]
        setHabits(habitsToSave)
        saveHabitsToLocalStorage(habitsToSave)
    }
    const removeHabitAt = (index: number) => {
        const newHabits = [...habits]
        newHabits.splice(index, 1) // removes habits[index]
        setHabits(newHabits)
        saveHabitsToLocalStorage(newHabits)
    }
    useEffect(()=>{
        loadHabitsFromLocalStorage()
    },[])
    return <HabitContext.Provider value={{ habits, addHabit, removeHabitAt }}>
        {children}
    </HabitContext.Provider>
}