import { Box, Button, Card, CardActionArea, CardActions, Grid2, IconButton, Paper, TextField, Typography } from "@mui/material";
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
            <Typography variant="h3">Habits</Typography>
            <Grid2 container spacing={2} alignItems={"stretch"}>
                {habits.map((habitItem, habitIndex) =>
                    <HabitCard
                        habit={habitItem}
                        style={cardStyle}
                        onDeleteClick={() => {
                            handleDeleteClick(habitIndex)
                        }} />
                )}
            </Grid2>
            <NewHabitForm style={cardStyle} />
        </Box>
    </Paper>
}