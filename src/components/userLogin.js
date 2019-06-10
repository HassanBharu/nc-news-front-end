import React, { Component } from 'react'
import { getUsers } from './api'
import { navigate } from '@reach/router'

class UserLoginForm extends Component {
    state = {
        usernameInput: ''
    }
    render() {
        const { usernameInput } = this.state
        console.log(usernameInput)

        return (


            < form className="form" onSubmit={this.handleSubmit} >
                <ul className="liHome">
                    <li className="navLi"><button onClick={() => this.goTo('/')} className="navButton">Home</button></li>
                    <li className="navLi"><button onClick={() => this.goTo('/topics')} className="navButton">Topics</button></li>
                    <li className="navLi"><button onClick={() => this.goTo('/articles')} className="navButton">All Articles</button></li>
                    <li className="navLi"><button onClick={() => this.goTo('/users')} className="navButton">Users</button></li>
                </ul>

                {
                    this.props.login ? <div> <button className="button1" onClick={this.handleLogout}>Click to logout:{usernameInput}</button> </div> :
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