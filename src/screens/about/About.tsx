import { CSSProperties, useContext } from "react";
import {
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Grid2,
  Paper
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { DarkModeContext } from "../../data/contexts/DarkMode.context";


const features = [
  {
    title: "Track Habits",
    description: "Easily log and monitor your habits daily.",
    icon: <CheckCircleIcon />
  },
  {
    title: "Custom Reminders",
    description: "Set personalized reminders to stay on track.",
    icon: <CheckCircleIcon />
  },
  {
    title: "Progress Analytics",
    description: "Analyze your progress with visual charts.",
    icon: <CheckCircleIcon />
  }
];

const team = [
  { name: "Taha Khaksari", role: "Developer" },
  { name: "Jane Smith", role: "Designer" }
];

const FQA = [
  {
    q: "How can I track a habit?",
    a: "Add a new habit through the Habits page and track it in Dashboard.",
  },
]

const AboutPage = () => {
  const { darkMode } = useContext(DarkModeContext);
  // apply DarkMode 
  const cardStyle: CSSProperties = {
    marginTop: 8,
    backgroundColor: darkMode ? "#555" : undefined,
    color: darkMode ? "#ccc" : undefined
  }
  return (
    <Paper style={{
      backgroundColor: darkMode ? "#444" : undefined,
      color: darkMode ? "#ccc" : undefined
    }}>
      {/* Overview Section */}
      <Box textAlign="center" py={5}>
        <Typography variant="h3">About Habit Tracker</Typography>
        <Typography variant="subtitle1">A powerful tool designed to help users build and maintain positive habits.</Typography>
      </Box>

      {/* Course Introduction */}
      <Box textAlign="center" py={3}>
        <Typography variant="h5">This project is part of a comprehensive video course on frontend development.</Typography>
        <Typography variant="h6">A core module within the <strong>Dive Into React</strong> program.</Typography>
        <Typography variant="subtitle1">Designed for beginners eager to master React.</Typography>
      </Box>

      {/* GitHub Link */}
      <Box textAlign="center" mt={3} mb={3}>
        <Typography variant="h6">Explore the project on GitHub:</Typography>
        <Link href="https://github.com/imtaha-ir/habit-tracker.git" target="_blank" rel="noopener noreferrer">
          Habit Tracker GitHub Repository
        </Link>
      </Box>

      {/* Features */}
      <Grid2 container spacing={1}>
        {features.map((feature, index) => (
          <Grid2 key={index} size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
            <Card style={cardStyle}>
              <CardContent>
                {feature.icon}
                <Typography variant="h6">{feature.title}</Typography>
                <Typography variant="body2">{feature.description}</Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {/* Team */}
      <Typography variant="h4" sx={{ mt: 5, mb: 2 }}>Meet Our Team</Typography>
      <Grid2 container spacing={3}>
        {team.map((member, index) => (
          <Grid2 key={index} size={{ xs: 12, md: 6, xl: 4 }}>
            <Card style={cardStyle}>
              <CardContent>
                <Avatar sx={{ width: 56, height: 56, mb: 2 }} />
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2">{member.role}</Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {/* Frequently Asked Questions */}
      <Typography variant="h4" sx={{ mt: 5, mb: 2 }}>Frequently Asked Questions</Typography>
      {FQA.map((fqaItem, idx) =>
        <Accordion style={cardStyle}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{fqaItem.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{fqaItem.a}</Typography>
          </AccordionDetails>
        </Accordion>
      )}

      {/* Social Media Links */}
      <Box textAlign="center" mt={5}>
        <Typography variant="h6">Connect with Us:</Typography>
        <Typography variant="body1"><TelegramIcon /> @ImTaha_ir</Typography>
        <Typography variant="body1"><InstagramIcon />@ImTaha.ir</Typography>
      </Box>
    </Paper>
  );
};

export default AboutPage;
