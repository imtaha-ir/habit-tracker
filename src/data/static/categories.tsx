import { AccessAlarm, Diversity2, SelfImprovement, SettingsAccessibility, Spa } from "@mui/icons-material"

export interface Category {
    id: number,
    name: string,
    icon: any
}

const categories: Category[] = [
    {
        id: 1,
        name: "Health & Fitness",
        icon: <Spa />
    },
    {
        id: 2,
        name: "Personal Growth",
        icon: <SettingsAccessibility />
    },
    {
        id: 3,
        name: "Mindfulness & Well-being",
        icon: <SelfImprovement />
    },
    {
        id: 4,
        name: "Productivity",
        icon: <AccessAlarm />
    },
    {
        id: 5,
        name: "Social & Relationships",
        icon: <Diversity2 />
    }
]

export default categories