import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from './Index';
import MoreDetail from './MoreDetail'


class Recipe extends Component {


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