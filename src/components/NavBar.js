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
                <Navbar.Brand><Link to="/" style={{ fontWeight: 'bold', color: 'lightgreen' }}><i class="fas fa-atom"></i> NcNews</Link></Navbar.Brand>
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
                                <Link to={`/users/${this.props.loggingIn}`}>My Profile</Link>}
                                <p></p>
                                <Link to="/users">All Users</Link>
                            </DropdownMenu>
                        </Dropdown>


                        <Dropdown>
                            <Dropdown.Toggle className="text-white text-uppercase ml-5" variant="dark" id="dropdown-basic">
                                <i class="far fa-newspaper"></i> Articles
                         </Dropdown.Toggle>
                            <DropdownMenu>
                                <Link to="/articles">All Articles</Link>
                                <p></p>
                                {this.props.loggingIn &&
                                    <Link to="/articles/newArticle">Add Articles</Link>}
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