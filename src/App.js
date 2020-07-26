import React from 'react';
import NavBar from "./components/navbar/NavBar"
import Background from './components/background/Background';
import "./App.css"
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  return (
    // <Router>
    <>
    <NavBar/>
    <Background/>
    <Skills/>
    <Portfolio />
    {/* <Route path="/portfolio" component={Portfolio} /> */}
    </>
    // </Router>
  );
}

export default App;
