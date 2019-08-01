import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Nav from './Components/Nav';
import axios from "axios";
import RecipeThread from './Components/RecipeThread'
import MoreDetail from './Components/MoreDetail'
import AddRecipe from './Components/AddRecipe'

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
    axios
      .get("http://localhost:5000/recipe/all")
      .then(response => {
        this.setState({
          data: response.data
        });
        console.log(this.state.data)
      });
  }

  render() {
    return (
      <div className="App">
        <Router>

          <Nav />

          <Route exact path="/" render={() => <RecipeThread getAll={this.onLoad} data={this.state.data} />} />

          <Route exact path="/AddRecipe" render={() => <AddRecipe getAll={this.onLoad} data={this.state.data} />} />

          <Route path="/MoreDetail" component={MoreDetail} />


          {this.state.data.map((item) => (

            <Route path={"/" + item.name} render={() => <MoreDetail getAll={this.onLoad}
              name={item.name}
              description={item.description}
              ingredients={item.ingredients}

              id={item._id} />} />

          ))}

        </Router>

      </div>
    );
  }
}
