import React, { Component } from 'react';
import _ from 'lodash';
import {
    Table
} from 'reactstrap';
import Recipe from './Recipe'


function RecipeThread(props) {

    const {
        data
    } = props;

    return (
        <div >
            <Table striped bordered hover variant="dark">
                <tbody>
                    {_.reverse(data).map((item, index) => (
                        <Recipe key={index} getAll={props.getAll} name={item.name} description={item.description} ingredients={item.ingredients} image={item.ingredients} />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}





export default RecipeThread;