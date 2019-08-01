import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";



function Recipe(props) {


    let handleClick = () => {
        let itemToDelete = {
            name: props.name,
            image: props.image
        }

        axios
            .delete("http://localhost:5000/recipe/deleteRecipe", { data: itemToDelete })
            .then(res => props.getAll())

    }


    return (
        <tr>
            <td >
                <h4>{props.name}</h4>
                <p>{props.ingredients}</p>
                <p>{props.description}</p>
                <p>{props.image}</p>
                <button onClick={handleClick}>Delete Item</button>
            </td>
        </tr>
    );
}


export default Recipe;