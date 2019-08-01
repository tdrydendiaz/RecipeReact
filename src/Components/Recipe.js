import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




function Recipe(props) {


  


    return (
        <tr>
            <td >
                <h4>{props.name}</h4>
                <p>{props.ingredients}</p>
                <p>{props.description}</p>
                <p>{props.image}</p>
                <button ><Link to={"/"+props.name}>More Details</Link></button>
            </td>
        </tr>
    );
}


export default Recipe;