import moment from "moment";
import { createContext, ReactNode, useEffect, useState } from "react"

export type Habit = {
    name: string;
    completed: boolean;
    lastDone: Date | null;
    categoryId?: number
    dayStreak: number
}
type HabitDataContextType = {
    habits: Habit[]
    addHabit: (habit: Habit) => void
    removeHabitAt: (index: number) => void
    makeHabitDoneToday: (index: number) => void
}

export const HabitContext = createContext<HabitDataContextType>({
    habits: [],
    addHabit: () => { },
    removeHabitAt: () => { },
    makeHabitDoneToday: () => { }
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
        const habitsToSave = [...habits, newHabit]
        setHabits(habitsToSave)
        saveHabitsToLocalStorage(habitsToSave)
    }
    const removeHabitAt = (index: number) => {
        const newHabits = [...habits]
        newHabits.splice(index, 1) // removes habits[index]
        setHabits(newHabits)
        saveHabitsToLocalStorage(newHabits)
    }
    const makeHabitDoneToday = (index: number) => {
        const newHabits = [...habits]
        // 1. Prevent multiple updates in a single date
        const ld = newHabits[index].lastDone
        const startOfToday = moment().startOf('day')
        if (ld && startOfToday.isSame(ld, 'day')) {
            return;
        }
        // 2. Increases streak if done yesterday or 
        //    resets streak if last completion was older than yesterday.
        const yesterday = moment().startOf('day').subtract(1, 'day')
        if (yesterday.isSameOrBefore(ld)) {
            newHabits[index].dayStreak = newHabits[index].dayStreak + 1
        } else {
            newHabits[index].dayStreak = 1
        }
        // 3. completed should be true only when dayStreak is greater than 30.
        if (newHabits[index].dayStreak >= 30) {
            newHabits[index].completed = true
        }
        newHabits[index].lastDone = startOfToday.toDate()
        setHabits(newHabits)
        saveHabitsToLocalStorage(newHabits);
    }
    useEffect(() => {
        loadHabitsFromLocalStorage()
    }, [])
    return <HabitContext.Provider value={{ habits, addHabit, removeHabitAt, makeHabitDoneToday }}>
        {children}
    </HabitContext.Provider>
}