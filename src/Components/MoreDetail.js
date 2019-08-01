import React, { Component } from 'react';
import axios from "axios";


export class MoreDetail extends Component {

        constructor() {
            super();
            this.state = {
                confirm: ""
            };
        }
makeRequest = () => {
        let deleteItem = {
            _id: this.props.id
        }
        axios
            .delete("http://localhost:5000/recipe/deleteRecipe", { data: deleteItem })
            .then(response => {
                console.log("deleted recipe")
this.setState({
          text: "deleted"
          
        });
                this.props.getAll();
            });
    };




    render() {

        return (
            <div >
                <p>Recipe Name: {this.props.name}</p>
                <p>Recipe Description: {this.props.description}</p>
                <p>Recipe Ingrients: {this.props.ingredients}</p>
                <p>Recipe Image: {this.props.image}</p>
                <button onClick={this.makeRequest} Delete Recipe> Delete Recipe </button>
            </div>

        );
    }
}

export default MoreDetail;
