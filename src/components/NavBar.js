import React, { Component } from 'react'
import { getUsers } from './api'
import { Link, navigate } from '@reach/router'
import '../index.css'
import { NavDropdown, Navbar, Nav, Dropdown, Form, FormControl, Button } from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import UserLoginForm from './userLogin'

class NavBar extends Component {
    state = {
        usernameInput: ''
    }

    render() {
        console.log(this.props)
        return (

            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="/">NcNews</Navbar.Brand>
                {this.props.loggingIn ? <Nav.Link href="/login"> <Navbar.Text className="mr text-white text-uppercase"> click to logout:  {this.props.loggingIn} </Navbar.Text></Nav.Link> :
                    <Nav.Link className="mr text-white text-uppercase" href="/login">
                        click to sign in
            </Nav.Link>}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="text-white text-uppercase ml-5" href="/">HOME</Nav.Link>
                        <Nav.Link className="nav-link text-white text-uppercase ml-5" href="/topics">TOPICS</Nav.Link>
                        <Nav.Link className="nav-link text-white text-uppercase ml-5" href="/users">USERS</Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle className="text-white text-uppercase ml-5" variant="dark" id="dropdown-basic">
                                Articles
                         </Dropdown.Toggle>
                            <DropdownMenu>
                                <NavDropdown.Item href="/articles">All Articles</NavDropdown.Item>
                                {this.props.loggingIn &&
                                    <NavDropdown.Item href="articles/newArticle">Add Articles</NavDropdown.Item>}
                            </DropdownMenu>
                        </Dropdown>

                    </Nav>
                </Navbar.Collapse>


            </Navbar>

        )
    }
}

export default NavBar