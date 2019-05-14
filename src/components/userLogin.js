import React, { Component } from 'react'
import { getUsers } from './api'

class UserLoginForm extends Component {
    state = {
        usernameInput: ''
    }
    render() {
        return (

            <form style={formClass}>
                <input onChange={this.usernameInput}></input>
                <button onSubmit={this.handleSubmit}>click to log in</button>
            </form>
        )
    }
    usernameInput = (username) => {
        // console.log(username.target.value)
        this.setState({ usernameInput: username.target.value })

    }
    handleSubmit = (event) => {

        getUsers(this.state.usernameInput).then(users => {
            return users.inclides(this.state.usernameInput)
        })
    }
}

const formClass = {
    background: 'grey',
    color: 'white',
    fontSize: '30px',
    textAlign: 'right',
    padding: '5px',
    paddingTop: '5px'
}

export default UserLoginForm