import React, { Component } from 'react'
import { getUsers } from './api'
import { Link } from '@reach/router'

class UserLoginForm extends Component {
    state = {
        usernameInput: ''
    }
    render() {
        const { usernameInput } = this.state
        return (


            < form style={formClass} onSubmit={this.handleSubmit} >
                <ul className="liHome">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                    <li><Link to="/articles">All articles</Link></li>
                </ul>

                {this.props.login ? <button onClick={this.handleLogout}>logout</button> :
                    <div>
                        <label>username:</label>
                        <input onChange={this.usernameInput}></input>
                        <button onClick={() => this.props.userLoggedIn(usernameInput)}>click to log in</button>
                        <p style={defaultUser}>default username: jessjelly(all lowercase)</p>
                    </div>}
            </form >
        )
    }
    usernameInput = (username) => {
        this.setState({ usernameInput: username.target.value })

    }
    handleSubmit = (event) => {
        event.preventDefault()
        getUsers(this.state.usernameInput).then(users => {
            return this.props.userLoggedIn(users.username)
        })

    }
    handleLogout = (event) => {
        event.preventDefault()
        this.setState({ usernameInput: this.props.userLoggedIn('') })
    }

}

const formClass = {
    background: 'grey',
    color: 'white',
    fontSize: '18px',
    textAlign: 'right',
    padding: '30px',
    paddingTop: '5px'
}
const defaultUser = {
    background: 'grey',
    color: 'white',
    fontSize: '10px',
    textAlign: 'right',
    padding: '5px',
    paddingTop: '5px'
}

export default UserLoginForm