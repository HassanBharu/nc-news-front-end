import React, { Component } from 'react'
import { getUsers } from './api'
import { navigate, Link } from '@reach/router'
import { Form } from 'react-bootstrap'


class UserLoginForm extends Component {
    state = {
        usernameInput: ''
    }
    render() {
        const { usernameInput } = this.state


        return (



            < form className="form" onSubmit={this.handleSubmit} >

                {
                    this.props.login ? <div> <button className="button1" onClick={this.handleLogout}>LOGOUT</button> <p>GOOD BYE!</p> </div> :
                        <div>
                            <label>username:</label>
                            <input placeholder=" default user: jessjelly" onChange={this.usernameInput} className="input"></input>
                            <button className="button2" type='submit'>click to log in</button>
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
        navigate('/')
    }

    goTo = (destination) => {
        navigate(`${destination}`)
    }

    handleLogout = (event) => {
        event.preventDefault()
        this.setState({ usernameInput: this.props.userLoggedIn('') })
        navigate('/')
    }

}


export default UserLoginForm