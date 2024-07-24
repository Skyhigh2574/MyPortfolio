import {useState, React} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Navbar';
import Home from './components/Image';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Image from './components/Image';
import Work from './components/Work'
import NavbarComponent from './components/Navbar';
import './App.css';


function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <div id="home"><Home /></div> */}
        <NavbarComponent toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <div id="home"><Image isDarkTheme={isDarkTheme}/></div>
        <div id="about"><About isDarkTheme={isDarkTheme}/></div>
        <div id="work"><Work isDarkTheme={isDarkTheme}/></div>
        <div id="projects"><Projects isDarkTheme={isDarkTheme}/></div>
        <div id="skills"><Skills isDarkTheme={isDarkTheme} /></div>
        <div id="contact"><Contact isDarkTheme={isDarkTheme}/></div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
