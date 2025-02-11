import { Card, CardActionArea, CardContent, CardMedia, Grid2, Paper, Typography } from "@mui/material";
import homeScreenImages from '../../assets/images/home-screen'
import { useContext } from "react";
import { DarkModeContext } from "../../data/contexts/DarkMode.context";

interface HomeProps {
    onPageSelect: (pageName: string) => void
}

export default function Home({ onPageSelect }: HomeProps) {
    const darkMode = useContext(DarkModeContext)
    const handleMenuClick = (pageName: string) => {
        onPageSelect(pageName)
    }
    return <Paper style={{ backgroundColor: darkMode ? "#444" : undefined }}>
        <Grid2 padding={2}>
            <Card>
                <CardActionArea onClick={() => { handleMenuClick('habits') }}>
                    <CardMedia component='img'
                        height={150}
                        image={homeScreenImages.imageHabits}
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
            <Card>
                <CardActionArea onClick={() => { handleMenuClick('dashboard') }}>
                    <CardMedia component='img'
                        height={150}
                        image={homeScreenImages.imageDashboard}
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
            <Card>
                <CardActionArea onClick={() => { handleMenuClick('settings') }}>
                    <CardMedia component='img'
                        height={150}
                        image={homeScreenImages.imageSettings}
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
            <Card>
                <CardActionArea onClick={() => { handleMenuClick('about') }}>
                    <CardMedia component='img'
                        height={150}
                        image={homeScreenImages.imageAbout}
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