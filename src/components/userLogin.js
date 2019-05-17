import React, { Component } from 'react'
import { getUsers } from './api'

class UserLoginForm extends Component {
    state = {
        usernameInput: ''
    }
    render() {
        const { usernameInput } = this.state
        return (
            < form style={formClass} onSubmit={this.handleSubmit} >
                {this.props.login ? <button onClick={this.handleLogout}>logout</button> :
                    <div>
                        <label>username:</label>
                        <input onChange={this.usernameInput}></input>
                        <button onClick={() => this.props.userLoggedIn(usernameInput)}>click to log in</button>
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
    padding: '5px',
    paddingTop: '5px'
}

export default UserLoginForm