import { Box, Button, Card, CardActionArea, CardActions, Paper, TextField, Typography } from "@mui/material";
import { ChangeEvent, CSSProperties, useContext, useState } from "react";
import { HabitContext } from "../../data/contexts/HabitsDataContext";
import { DarkModeContext } from "../../data/contexts/DarkMode.context";

export default function HabitsPage() {
    const [newHabitName, setNewHabitName] = useState('')
    const { habits, addHabit } = useContext(HabitContext)
    const { darkMode } = useContext(DarkModeContext)
    const cardStyle: CSSProperties = {
        marginTop: 8,
        backgroundColor: darkMode ? "#555" : undefined,
        color: darkMode ? "#ccc" : undefined
    }
    function handleNewHabitNameChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        setNewHabitName(event.target.value)
    }
    function handleAddNewHabit() {
        addHabit(newHabitName)
    }

    return <Paper style={{
        backgroundColor: darkMode ? "#444" : undefined,
        color: darkMode ? "#ccc" : undefined
    }}>
        <Box p={1}>
            <Typography variant="subtitle1">Habits</Typography>
            {habits.map((habitName) =>
                <Card style={cardStyle}>
                    <Box p={1}>
                        <Typography variant="subtitle2">
                            {habitName}
                        </Typography>
                    </Box>
                </Card>
            )
            }
            <Card style={cardStyle}>
                <Box p={1}>
                    <Typography variant="subtitle2">
                        New Habit
                    </Typography>
                    <Box>
                        <TextField
                            value={newHabitName}
                            onChange={handleNewHabitNameChange}
                            variant="standard"
                            fullWidth
                            placeholder="Habit Name" />
                    </Box>
                </Box>
                <CardActions>
                    <Button onClick={handleAddNewHabit}>Add</Button>
                </CardActions>
            </Card>
        </Box>
    </Paper>
}