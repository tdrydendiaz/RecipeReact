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

                this.setState({
                    confirm: "deleted"

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
                <button name="clickme" onClick={this.makeRequest} Delete Recipe> Delete Recipe </button>
                <p>{this.state.confirm}</p>
             
            </div>

        );
    }
}

export default MoreDetail;
