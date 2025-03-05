import { Box, Button, Card, CardActionArea, CardActions, IconButton, Paper, TextField, Typography } from "@mui/material";
import { ChangeEvent, CSSProperties, useContext, useState } from "react";
import { HabitContext } from "../../data/contexts/HabitsDataContext";
import { DarkModeContext } from "../../data/contexts/DarkMode.context";
import { DeleteForever, Done } from "@mui/icons-material";
import HabitCard from "../../components/HabitCard/HabitCard";
import NewHabitForm from "./NewHabitForm";

export default function HabitsPage() {
    const { habits, removeHabitAt } = useContext(HabitContext)
    const { darkMode } = useContext(DarkModeContext)
    const cardStyle: CSSProperties = {
        marginTop: 8,
        backgroundColor: darkMode ? "#555" : undefined,
        color: darkMode ? "#ccc" : undefined
    }


    function handleDeleteClick(idx: number) {
        removeHabitAt(idx)
    }

    return <Paper style={{
        backgroundColor: darkMode ? "#444" : undefined,
        color: darkMode ? "#ccc" : undefined
    }}>
        <Box p={1}>
            <Typography variant="subtitle1">Habits</Typography>
            {habits.map((habitItem, habitIndex) =>
                <HabitCard
                    habit={habitItem}
                    style={cardStyle}
                    onDeleteClick={() => {
                        handleDeleteClick(habitIndex)
                    }} />
            )}
            <NewHabitForm style={cardStyle} />
        </Box>
    </Paper>
}