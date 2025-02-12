import { Box, Card, Paper, Typography } from "@mui/material";
import { CSSProperties, useContext } from "react";
import { HabitContext } from "../../data/contexts/HabitsDataContext";
import { DarkModeContext } from "../../data/contexts/DarkMode.context";

export default function HabitsPage() {
    const { habits } = useContext(HabitContext)
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
        </Box>
    </Paper>
}