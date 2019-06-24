import React, { Component } from 'react'
import { getUsers } from './api'
import { navigate } from '@reach/router'
import { Button } from 'react-bootstrap'
import { Link } from '@reach/router'


class UserLoginForm extends Component {
    state = {
        usernameInput: ''
    }
    render() {


        return (



            < form onSubmit={this.handleSubmit} >

                {
                    this.props.login ?
                        <div>

                            <h5 style={{ backgroundColor: 'lightgreen', textAlign: 'center' }}>Thank You For Visiting NcNews</h5>

                            <div className="center">

                                <p>Are you sure you want to Sign Out?</p>

                                < Button variant="info" onClick={this.handleLogout} > YES</Button>

                                <span></span><span></span>
                                <Link to="/" style={{ color: "white" }}>
                                    < Button variant="info" >NO </Button></Link></div></div> :

                        <div >

                            <h5 style={{ backgroundColor: 'lightgreen', textAlign: 'center', fontWeight: 'bold' }}>Welcome Back</h5>
                            <div className="center">
                                <label style={{ fontWeight: 'bold' }}>Username: </label><span></span><span></span>

                                <input placeholder=" default user: jessjelly" onChange={this.usernameInput} className="input"></input>
                                <p></p>

                                <Button variant='info' type='submit'>Sign In</Button>
                            </div>

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



    handleLogout = (event) => {
        event.preventDefault()
        this.setState({ usernameInput: this.props.userLoggedIn('') })
        navigate('/')
    }

}


export default UserLoginForm