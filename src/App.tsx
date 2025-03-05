import './App.css';
import Header from './components/header/Header';
import Home from './screens/home/Home';
import About from './screens/about/About';
import { useEffect, useState } from 'react';
import DarkModeProvider from './data/contexts/DarkMode.context';
import SettingsPage from './screens/settings/settingsPage';
import HabitsPage from './screens/habits/HabitsPage';
import HabitProvider from './data/contexts/HabitsDataContext';

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
        <div className="App">
          <Header title='Habit Tracker' onLogoClick={goHome} />
          {currentPage == 'home' && <Home onPageSelect={changePage} />}
          {currentPage == 'about' && <About />}
          {currentPage == 'settings' && <SettingsPage />}
          {currentPage == 'habits' && <HabitsPage />}
        </div>
      </HabitProvider>
    </DarkModeProvider>
  );
}

export default App;
