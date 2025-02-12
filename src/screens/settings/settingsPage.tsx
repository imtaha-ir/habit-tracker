import { Box, FormControlLabel, Paper, Switch, Typography } from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../../data/contexts/DarkMode.context";

export default function SettingsPage() {
    const { darkMode, setDarkMode } = useContext(DarkModeContext)
    return <Paper style={{ backgroundColor: darkMode ? "#444" : undefined, color: darkMode ? "#ccc" : undefined }}>
        <Box p={1}>
            <Typography variant="subtitle1">App Settings</Typography>
            <FormControlLabel label="Dark Mode" control={<Switch checked={darkMode} onClick={() => { setDarkMode(!darkMode) }} />} labelPlacement="start" />
        </Box>
    </Paper>
}