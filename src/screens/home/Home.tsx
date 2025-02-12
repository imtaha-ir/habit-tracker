import { Card, CardActionArea, CardContent, CardMedia, Grid2, Paper, Typography } from "@mui/material";
import homeScreenImages from '../../assets/images/home-screen'
import { CSSProperties, useContext } from "react";
import { DarkModeContext } from "../../data/contexts/DarkMode.context";

interface HomeProps {
    onPageSelect: (pageName: string) => void
}

export default function Home({ onPageSelect }: HomeProps) {
    const {darkMode} = useContext(DarkModeContext)
    const handleMenuClick = (pageName: string) => {
        onPageSelect(pageName)
    }
    const cardStyle:CSSProperties = darkMode ? { backgroundColor: "#555", color: "#ccc" } : {}
    return <Paper style={{ backgroundColor: darkMode ? "#444" : undefined }}>
        <Grid2 padding={2}>
            <Card style={cardStyle}>
                <CardActionArea onClick={() => { handleMenuClick('habits') }}>
                    <CardMedia component='img'
                        height={150}
                        image={darkMode ? homeScreenImages.imageHabitsDark : homeScreenImages.imageHabits}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Habits
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid2>

        <Grid2 padding={2}>
            <Card style={cardStyle}>
                <CardActionArea onClick={() => { handleMenuClick('dashboard') }}>
                    <CardMedia component='img'
                        height={150}
                        image={darkMode ? homeScreenImages.imageDashboardDark : homeScreenImages.imageDashboard}

                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Dashboard
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid2>

        <Grid2 padding={2}>
            <Card style={cardStyle}>
                <CardActionArea onClick={() => { handleMenuClick('settings') }}>
                    <CardMedia component='img'
                        height={150}
                        image={darkMode ? homeScreenImages.imageSettingsDark : homeScreenImages.imageSettings}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Settings
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid2>

        <Grid2 padding={2}>
            <Card style={cardStyle}>
                <CardActionArea onClick={() => { handleMenuClick('about') }}>
                    <CardMedia component='img'
                        height={150}
                        image={darkMode ? homeScreenImages.imageAboutDark : homeScreenImages.imageAbout}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            About
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid2>
    </Paper>
}