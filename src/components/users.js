import React, { Component } from "react";
import { Link } from '@reach/router'
import { getAllUsers } from './api'
import '../index.css'

class Users extends Component {
    state = {
        users: []
    }

    render() {

        const { users } = this.state

        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Users</h1>
                <ul>
                    {users.map(user => {
                        return <li key={user.username}><Link to={`${user.username}/articles`}>{user.name} <span></span> {user.avatar_url} <span></span> {user.username}</Link></li>
                    })}
                </ul>
            </div>

        )
    }

    componentDidMount() {
        getAllUsers()
            .then(users => {
                this.setState({ users })
            })
    }
}

export default Users;