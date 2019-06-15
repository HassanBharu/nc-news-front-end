import React, { Component } from 'react'
import { getUsers } from './api'
import { navigate, Link } from '@reach/router'
import { Navbar, Container } from 'react-bootstrap'


class UserLoginForm extends Component {
    state = {
        usernameInput: ''
    }
    render() {
        const { usernameInput } = this.state


        return (

            < form className="form" onSubmit={this.handleSubmit} >
                <ul className="liHome">
                    <Link to="/" className="navButton">Home</Link>
                    <Link to="/topics" className="navButton">Topics</Link>
                    <Link to="/articles" className="navButton">All Articles</Link>
                    <Link to="/users" className="navButton">Users</Link>
                </ul>

                {
                    this.props.login ? <div> <button className="button1" onClick={this.handleLogout}>LOGOUT: {usernameInput || JSON.parse(localStorage.getItem('userLoggedIn'))}</button> </div> :
                        <div>
                            <label>username:</label>
                            <input onChange={this.usernameInput} className="input"></input>
                            <button className="button2" type='submit'>click to log in</button>
                            <p className="user">default username: jessjelly(all lowercase)</p>
                        </div>
                }
            </form >
        )
    }
    usernameInput = (username) => {
        this.setState({ usernameInput: username.target.value })

    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.usernameInput) {
            getUsers(this.state.usernameInput).then(users => {

                return this.props.userLoggedIn(users.username)
            }).catch(({ response }) => {
                navigate('/error', { replace: true, state: { From: 'users', msg: response.data.msg, status: response.status } })
            })
        }
    }

    goTo = (destination) => {
        navigate(`${destination}`)
    }

    handleLogout = (event) => {
        event.preventDefault()
        this.setState({ usernameInput: this.props.userLoggedIn('') })
    }

}


export default UserLoginForm