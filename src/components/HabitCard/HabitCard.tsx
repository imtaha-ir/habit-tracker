import { DeleteForever, Done } from "@mui/icons-material"
import { Box, Card, CardActions, Grid2, IconButton, styled, Typography } from "@mui/material"
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
    return <Grid2 size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
        <Card style={{ ...style, height: "100%" }} >
            <Box p={1} >
                <Grid2 container spacing={1} alignItems={"center"}>
                    <Grid2>{habit.completed && <Done />}</Grid2>
                    <Typography variant="subtitle2" flexGrow={1}>
                        {habit.name}
                    </Typography>
                </Grid2>
            </Box>
            <CardActions>
                <Grid2 container width={"100%"}>
                    <Grid2 flexGrow={1}>
                        {cat != undefined &&
                            <>
                                {cat?.icon}
                                <Typography variant="caption">{cat.name}</Typography>
                            </>
                        }
                    </Grid2>
                    <Grid2>
                        <IconButton
                            color="error"
                            onClick={onDeleteClick}
                        >
                            <DeleteForever />
                        </IconButton>
                    </Grid2>
                </Grid2>
            </CardActions>
        </Card>
    </Grid2>
}