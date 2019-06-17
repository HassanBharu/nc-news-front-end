import React, { Component } from 'react'
import { getUsers } from './api'
import { navigate } from '@reach/router'
import { Button } from 'react-bootstrap'


class UserLoginForm extends Component {
    state = {
        usernameInput: ''
    }
    render() {


        return (



            < form className="form" onSubmit={this.handleSubmit} >

                {
                    this.props.login ? <div> <h5 style={{ backgroundColor: 'lightgreen', textAlign: 'center' }}>Thank You For Visiting NcNews</h5>
                        <div style={{
                            left: '50px'
                        }}>
                            <p>Are you sure you want to Sign Out?</p>
                            < Button variant="info" bsStyle="info" onClick={this.handleLogout} > YES</Button> < Button variant="info" bsStyle="info" href="/" > NO</Button></div></div> :
                        <div>
                            <h5 style={{ backgroundColor: 'lightgreen', textAlign: 'center', fontWeight: 'bold' }}>Welcome Back</h5>
                            <label style={{ fontWeight: 'bold' }}>Username: </label><span></span><span></span>
                            <input placeholder=" default user: jessjelly" onChange={this.usernameInput} className="input"></input>
                            <p></p>
                            <Button variant='info' type='submit'>Sign In</Button>
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