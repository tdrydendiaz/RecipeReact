import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from './Index';
import MoreDetail from './MoreDetail'


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

                        <li><Link to="/MoreDetail">Add New Recipe</Link></li>

                    </ul>

                    <Route exact path="/" component={Index} />
                    <Route exact path="/MoreDetail" component={MoreDetail} />
                    


                    {/* <PostThread getAll={this.onLoad} data={this.state.data} /> */}

                </div>

            </Router>
        );
    }
}

export default Recipe;