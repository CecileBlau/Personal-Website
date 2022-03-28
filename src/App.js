import './App.css';
import { Route, Link, Routes } from "react-router-dom";
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'





function App() {
  
  return (
  
        <div className='containerWithoutImage'>
          <ResponsiveAppBar/>
          <About />
          <Projects/>
          <Contact />
       
    </div>
  );
}

export default App;
