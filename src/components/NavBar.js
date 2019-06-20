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
                <Navbar.Brand style={{ fontWeight: 'bold', color: 'lightgreen' }} href="/"><i class="fas fa-atom"></i> NcNews</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">

                        <Link className="nav-link text-white text-uppercase ml-5" to="/"><i class="fas fa-home"></i> Home</Link>
                        <Link className="nav-link text-white text-uppercase ml-5" to="/topics"><i class="fas fa-book-open"></i> TOPICS</Link>

                        <Dropdown>
                            <Dropdown.Toggle className="text-white text-uppercase ml-5" variant="dark" id="dropdown-basic">
                                <i class="fas fa-users"></i> users
                         </Dropdown.Toggle>
                            <DropdownMenu> {this.props.loggingIn &&
                                <NavDropdown.Item href={`/users/${this.props.loggingIn}`}>My Profile</NavDropdown.Item>}

                                <NavDropdown.Item href="/users">All Users</NavDropdown.Item>
                            </DropdownMenu>
                        </Dropdown>


                        <Dropdown>
                            <Dropdown.Toggle className="text-white text-uppercase ml-5" variant="dark" id="dropdown-basic">
                                <i class="far fa-newspaper"></i> Articles
                         </Dropdown.Toggle>
                            <DropdownMenu>
                                <NavDropdown.Item href="/articles">All Articles</NavDropdown.Item>
                                {this.props.loggingIn &&
                                    <NavDropdown.Item href="/articles/newArticle">Add Articles</NavDropdown.Item>}
                            </DropdownMenu>
                        </Dropdown>

                    </Nav>
                    {this.props.loggingIn ? <Link to="/login"> <Navbar.Text className="mr text-white text-uppercase"> <i class="fas fa-sign-out-alt"></i> Sign out:  <span></span> <span></span>{this.props.loggingIn} </Navbar.Text></Link> :
                        <Link className="mr text-white text-uppercase" to="/login">
                            <i class="fas fa-sign-in-alt"></i> sign in
                                </Link>}
                </Navbar.Collapse>


            </Navbar>

        )
    }
}

export default NavBar