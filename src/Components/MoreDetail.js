import React, { Component } from 'react';



export class MoreDetail extends Component {

    render() {

        return (
            <div >
                <p>Recipe Name: {this.props.name}</p>
                <p>Recipe Description: {this.props.description}</p>
                <p>Recipe Ingrients: {this.props.ingredients}</p>
                <p>Recipe Image: {this.props.image}</p>
            
            </div>

        );
    }
}

export default MoreDetail;
