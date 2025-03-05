import { DeleteForever, Done } from "@mui/icons-material"
import { Box, Card, CardActions, IconButton, styled, Typography } from "@mui/material"
import { Habit } from "../../data/contexts/HabitsDataContext"
import { CSSProperties } from "react"
import categories from "../../data/static/categories"

interface HabitCardProps {
    habit: Habit
    style?: CSSProperties
    onDeleteClick?: () => void
}

export default function HabitCard({ habit, style, onDeleteClick }: HabitCardProps) {
    const cat = categories.find((categoryItem) => {
        return (categoryItem.id == habit.categoryId)
    })
    return <Card style={style}>
        <Box p={1}>
            {habit.completed && <Done />}
            <Typography variant="subtitle2">
                {habit.name}
            </Typography>
            {cat != undefined &&
                <>
                    {cat?.icon}
                    <Typography variant="caption">{cat.name}</Typography>
                </>
            }
        </Box>
        <CardActions>
            <IconButton
                color="error"
                onClick={onDeleteClick}
            >
                <DeleteForever />
            </IconButton>
        </CardActions>
    </Card>
}