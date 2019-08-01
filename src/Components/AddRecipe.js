import React, { Component } from 'react';
import axios from "axios";



class AddRecipe extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            description: "",
            ingredients: "",
            image: ""
        };

    }

    makeRequest = (e) => {
        e.preventDefault();

        console.log(e.target[0].value)

        let newItem = {
            name: e.target[0].value,
            description: e.target[1].value,
            ingredients: e.target[2].value,
            image: e.target[3].value
        }

        axios
            .post("http://localhost:5000/recipe/createRecipe", newItem)

            .then(response => {


                this.setState({
                    data: response.data
                });

                this.props.getAll();



            });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.makeRequest}>
                    <label for="repName" id="accUsernameLabel">Name: </label>
                    <input type="text" id="accUsername" class="form-control" name="accUsername" />
                    <br />
                    <label for="accEmail" id="accEmailLable">Description: </label>
                    <input type="text" id="accEmail" class="form-control" name="accEmail" />
                    <br />
                    <label for="accContent" id="accContentLable">Ingredients: </label>
                    <input type="text" id="accContent" class="form-control" name="accContent" />
                    <br />
                    <br />
                    <label for="accEmail" id="accEmailLable">Image: </label>
                    <input type="text" id="accEmail" class="form-control" name="accEmail" />
                    <br />

                    <input type="submit" class="btn btn-primary" value="create post" />
                </form>
            </div>
        );
    }
}

export default AddRecipe;
