import { Box, Button, Card, CardActions, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { ChangeEvent, CSSProperties, useContext, useState } from "react";
import { HabitContext } from "../../data/contexts/HabitsDataContext";
import categories from "../../data/static/categories";

interface NewHabitFormProps {
    style?: CSSProperties
}

export default function NewHabitForm({ style }: NewHabitFormProps) {
    const { addHabit } = useContext(HabitContext)
    const [newHabitName, setNewHabitName] = useState('')
    const [categoryId, setCategoryId] = useState(1)
    function handleAddNewHabit() {
        addHabit({
            name: newHabitName,
            completed: false,
            categoryId,
            lastDone: null,
            dayStreak: 0
        })
    }
    function handleNewHabitNameChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        setNewHabitName(event.target.value)
    }
    return <Card style={style}>
        <Box p={1}>
            <Typography variant="subtitle2">
                New Habit
            </Typography>
            <Box mb={2}>
                <TextField
                    value={newHabitName}
                    onChange={handleNewHabitNameChange}
                    variant="standard"
                    fullWidth
                    placeholder="Habit Name" />
            </Box>
            <FormControl fullWidth variant="standard">
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                    labelId="category-select-label"
                    value={categoryId}
                    label="Category"
                    onChange={(event) => {
                        setCategoryId(+event.target.value)
                    }}
                >
                    {categories.map((category) => (
                        <MenuItem value={category.id}>
                            {category.icon}
                            {category.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
        <CardActions>
            <Button onClick={handleAddNewHabit}>Add</Button>
        </CardActions>
    </Card>
}