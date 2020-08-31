import React from 'react';
import NavBar from "./components/navbar/NavBar"
import Background from './components/background/Background';
import "./App.css"
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact'



function App() {
  return (
    // <Router>
    <>
    <NavBar/>
    <Background/>
    <Skills/>
    <Portfolio />
    <Contact />
    </>
  );
}

export default App;
