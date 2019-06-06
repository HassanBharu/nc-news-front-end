import React, { Component } from 'react'
import { getUsers } from './api'
import { Link, navigate } from '@reach/router'

class UserLoginForm extends Component {
    state = {
        usernameInput: ''
    }
    render() {
        const { usernameInput } = this.state

        return (


            < form className="form" onSubmit={this.handleSubmit} >
                <ul>
                    <li className="liHome"><Link to="/">Home</Link></li>
                    <li className="liHome"><Link to="/topics">Topics</Link></li>
                    <li className="liHome"><Link to="/articles">All Articles</Link></li>
                </ul>

                {
                    this.props.login ? <button className="button2" onClick={this.handleLogout}>logout</button> :
                        <div>
                            <label>username:</label>
                            <input onChange={this.usernameInput}></input>
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
    handleLogout = (event) => {
        event.preventDefault()
        this.setState({ usernameInput: this.props.userLoggedIn('') })
    }

}


export default UserLoginForm