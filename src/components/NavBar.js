import React, { Component } from 'react'
import '../index.css'
import { Link } from '@reach/router'
import { NavDropdown, Navbar, Nav, Dropdown } from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/DropdownMenu';


class NavBar extends Component {
    state = {
        usernameInput: ''
    }

    render() {
        return (

            <Navbar bg="dark" expand="lg">
                <Navbar.Brand style={{ fontWeight: 'bold', color: 'lightgreen' }} href="/">NcNews</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">

                        <Link className="nav-link text-white text-uppercase ml-5" to="/">Home</Link>
                        <Link className="nav-link text-white text-uppercase ml-5" to="/topics">TOPICS</Link>
                        <Link className="nav-link text-white text-uppercase ml-5" to="/users">USERS</Link>
                        <Dropdown>
                            <Dropdown.Toggle className="text-white text-uppercase ml-5" variant="dark" id="dropdown-basic">
                                Articles
                         </Dropdown.Toggle>
                            <DropdownMenu>
                                <NavDropdown.Item href="/articles">All Articles</NavDropdown.Item>
                                {this.props.loggingIn &&
                                    <NavDropdown.Item href="/articles/newArticle">Add Articles</NavDropdown.Item>}
                            </DropdownMenu>
                        </Dropdown>

                    </Nav>
                    {this.props.loggingIn ? <Link to="/login"> <Navbar.Text className="mr text-white text-uppercase"> Sign out:  <span></span> <span></span>{this.props.loggingIn} </Navbar.Text></Link> :
                        <Link className="mr text-white text-uppercase" to="/login">
                            sign in
                                </Link>}
                </Navbar.Collapse>


            </Navbar>

        )
    }
}

export default NavBar