import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Nav from './Components/Nav'
import Recipe from './Components/Recipe'
import Index from './Components/Index';




export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  };
  componentDidMount() {
    this.onLoad();
  };

  onLoad = () => {

    this.setState({
      data: [{ name: "Brownie", desc: "The special kind", ingreds: ["Choc", "Sugar"] },
      { name: "Pizza", desc: "Basic", ingreds: "Cheese & Tomato" },
      { name: "Sandwich", desc: "Homemade", ingreds: "Bacon" },
      { name: "Spagbol", desc: "Moms Spagetti", ingreds: ["Spag", "mushrooms"] }]

    });

  }
  render(){
    return (
      <div className="App">
        <Nav />
        {/* <Index /> */}

      </div>
    );
  }
}

