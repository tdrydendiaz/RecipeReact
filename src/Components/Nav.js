import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import Routers from './Routers'

export default class IndexNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Recipes ^_^</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/MoreDetail">MoreDetail</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/AddRecipe">New Recipe</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://toolband.com/">ClickForASurprise!</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
        <Routers />
      </div>
    );
  }
}