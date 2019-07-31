import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../App';


class Recipe extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }
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



    render() {
        return (
            <Router>

                <div>

                    <ul>

                        <li><Link to="/">Index</Link></li>

                        <li><Link to="/addNew">Add New Recipe</Link></li>

                    </ul>

                    <Route exact path="/" component={App} />

                    <Route path="/addNew" component={Recipe} />
                    <App getAll={this.onLoad} />


                    {/* <PostThread getAll={this.onLoad} data={this.state.data} /> */}

                </div>

            </Router>
        );
    }
}

export default Recipe;