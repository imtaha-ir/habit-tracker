import { CSSProperties, useContext } from "react"
import { HabitContext } from "../../data/contexts/HabitsDataContext"
import { DarkModeContext } from "../../data/contexts/DarkMode.context"
import { Box, Button, Card, CardActionArea, CardActions, Paper, Typography } from "@mui/material"
import categories from "../../data/static/categories"
import moment from "moment"

export default function DashboardPage() {
    const { habits, makeHabitDoneToday } = useContext(HabitContext)
    const { darkMode } = useContext(DarkModeContext)
    const cardStyle: CSSProperties = {
        marginTop: 8,
        backgroundColor: darkMode ? "#555" : undefined,
        color: darkMode ? "#ccc" : undefined
    }
    return <Paper style={{
        backgroundColor: darkMode ? "#444" : undefined,
        color: darkMode ? "#ccc" : undefined
    }}>
        <Box p={1}>
            <Typography variant="subtitle1">Dashboard</Typography>
            {habits.map((habitItem, habitIndex) => {
                const category = categories.find(cat => cat.id == habitItem.categoryId)
                const doneToday = habitItem.lastDone && moment().isSame(habitItem.lastDone, 'day')
                return <Card style={cardStyle}>
                    <Box p={1}>
                        {category && category.icon}
                        <Typography variant="body1">{habitItem.name}</Typography>
                        <Typography variant="caption">Day streak: {habitItem.dayStreak}</Typography>
                        <CardActions>
                            <Button
                                variant="outlined"
                                onClick={() => { makeHabitDoneToday(habitIndex) }}
                                disabled={Boolean(doneToday)}
                            >Done</Button>
                        </CardActions>
                    </Box>
                </Card>
            })}
        </Box>
    </Paper>
}