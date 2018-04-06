import React, { Component } from 'react';
import {
    Collapse,
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.state = {
            collapse: false,
            dropDownOpen: false
        }
    }

    toggle() {
        this.setState({
            collapse: !this.state.collapse
        })
    }

    toggleDropdown() {
        this.setState({
            dropDownOpen: !this.state.dropDownOpen
        })
    }

    render() {
        return (
            <Navbar color="light" light expand="md">
                <Link className="navbar-brand" to="/">Brand</Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.collapse} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option
                                </DropdownItem>
                                <DropdownItem>
                                    Option
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    SignOut
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default Header;