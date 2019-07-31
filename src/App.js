import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Nav from './Components/Nav'
import Recipe from './Components/Recipe'
import Index from './Components/Index';




function App() {

  return (
    <div className="App">
      <Nav />
      <Index />
    
    </div>
  );
}

export default App;
