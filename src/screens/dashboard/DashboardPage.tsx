import { CSSProperties, useContext } from "react"
import { HabitContext } from "../../data/contexts/HabitsDataContext"
import { DarkModeContext } from "../../data/contexts/DarkMode.context"
import { Box, Button, Card, CardActionArea, CardActions, Grid2, Paper, Typography } from "@mui/material"
import categories from "../../data/static/categories"
import moment from "moment"

export default function DashboardPage() {
    const { habits, makeHabitDoneToday } = useContext(HabitContext)
    const { darkMode } = useContext(DarkModeContext)
    const cardStyle: CSSProperties = {
        marginTop: 8,
        height: "100%",
        backgroundColor: darkMode ? "#555" : undefined,
        color: darkMode ? "#ccc" : undefined
    }
    return <Paper style={{
        backgroundColor: darkMode ? "#444" : undefined,
        color: darkMode ? "#ccc" : undefined
    }}>
        <Box p={1}>
            <Typography variant="h3">Dashboard</Typography>
            <Grid2 container spacing={2} alignItems={"stretch"}>
                {habits.map((habitItem, habitIndex) => {
                    const category = categories.find(cat => cat.id == habitItem.categoryId)
                    const doneToday = habitItem.lastDone && moment().isSame(habitItem.lastDone, 'day')
                    return <Grid2 size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
                        <Card style={cardStyle} >
                            <Box p={1}>
                                <Grid2 container spacing={1} alignItems={"center"}>
                                    <Grid2>{category && category.icon}</Grid2>
                                    <Typography variant="body1" flexGrow={1}>{habitItem.name}</Typography>
                                </Grid2>
                                <CardActions>
                                    <Grid2 container width="100%" alignItems={"center"}>
                                        <Typography variant="caption" flexGrow={1}>Day streak: {habitItem.dayStreak}</Typography>

                                        <Button
                                            variant="outlined"
                                            onClick={() => { makeHabitDoneToday(habitIndex) }}
                                            disabled={Boolean(doneToday)}
                                        >Done</Button>
                                    </Grid2>
                                </CardActions>
                            </Box>
                        </Card>
                    </Grid2>
                })}
            </Grid2>
        </Box>
    </Paper>
}