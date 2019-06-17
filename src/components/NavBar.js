import React, { Component } from 'react'
import '../index.css'
import { NavDropdown, Navbar, Nav, Dropdown } from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/DropdownMenu';


class NavBar extends Component {
    state = {
        usernameInput: ''
    }

    render() {
        console.log(this.props)
        return (

            <Navbar bg="dark" expand="lg">
                <Navbar.Brand style={{ fontWeight: 'bold', color: 'lightgreen' }} href="/">NcNews</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
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
                                    <NavDropdown.Item href="/articles/newArticle">Add Articles</NavDropdown.Item>}
                            </DropdownMenu>
                        </Dropdown>

                    </Nav>
                    {this.props.loggingIn ? <Nav.Link href="/login"> <Navbar.Text className="mr text-white text-uppercase"> Sign out:  <span></span> <span></span>{this.props.loggingIn} </Navbar.Text></Nav.Link> :
                        <Nav.Link className="mr text-white text-uppercase" href="/login">
                            sign in
                                </Nav.Link>}
                </Navbar.Collapse>


            </Navbar>

        )
    }
}

export default NavBar