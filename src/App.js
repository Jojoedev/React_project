import './App.css';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom';
import Projects from './components/Projects';
import WeekDays from './components/WeekDays';
import Weekends from './components/Weekends';
import Game from './components/Game';


function App() {
  
    let day = new Date().getDay();
    
  return (
    <div className="App">
     <Nav  />
     {/*      {day == 0 || day == 6 ?
      <Weekends /> : 
      <WeekDays />}
      */}

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/about-me" element={<AboutMe />} /> 
      <Route path="/projects" element={<Projects/>} />
      <Route path="/game" element={<Game/>} />
      </Routes>
      

    </div>
  );
}

export default App;
