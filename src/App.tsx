import './App.css';
import Header from './components/header/Header';
import Home from './screens/home/Home';
import About from './screens/about/About';
import { useEffect, useState } from 'react';
import DarkModeProvider from './data/contexts/DarkMode.context';
import SettingsPage from './screens/settings/settingsPage';
import HabitsPage from './screens/habits/HabitsPage';
import HabitProvider from './data/contexts/HabitsDataContext';
import DashboardPage from './screens/dashboard/DashboardPage';
import { Container } from '@mui/material';

function App() {
  const [currentPage, setCurrentPage] = useState('')
  const changePage = (pageName: string) => {
    setCurrentPage(pageName)
    localStorage.setItem("currentPage", pageName)
  }
  const goHome = () => {
    changePage('home')
  }

  useEffect(() => {
    const pageName = localStorage.getItem("currentPage")
    changePage(pageName ?? "home")
  }, [])

  return (
    <DarkModeProvider>
      <HabitProvider>
        <Container maxWidth="xl"  className="App">
          <Header title='Habit Tracker' onLogoClick={goHome} />
          {currentPage == 'home' && <Home onPageSelect={changePage} />}
          {currentPage == 'about' && <About />}
          {currentPage == 'settings' && <SettingsPage />}
          {currentPage == 'habits' && <HabitsPage />}
          {currentPage == 'dashboard' && <DashboardPage />}
        </Container>
      </HabitProvider>
    </DarkModeProvider>
  );
}

export default App;
