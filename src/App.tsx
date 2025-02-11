import './App.css';
import Header from './components/header/Header';
import Home from './screens/home/Home';
import About from './screens/about/About';
import { useContext, useState } from 'react';
import DarkModeProvider, { DarkModeContext } from './data/contexts/DarkMode.context';

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const changePage = (pageName: string) => {
    setCurrentPage(pageName)
  }
  const goHome = () => {
    setCurrentPage('home')
  }
  return (
    <DarkModeProvider>
      <div className="App">
        <Header title='Habit Tracker' onLogoClick={goHome} />
        {currentPage == 'home' && <Home onPageSelect={changePage} />}
        {currentPage == 'about' && <About />}
      </div>
    </DarkModeProvider>
  );
}

export default App;
