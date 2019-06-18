import React, { Component } from "react";
import { getAllUsers } from './api'
import '../index.css'
import { Card, Button } from 'react-bootstrap'

class Users extends Component {
    state = {
        users: []
    }

    render() {

        const { users } = this.state

        return (
            <div>


                <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>Users</h2>
                <ul key={users.username}>
                    {users.map(user => {


                        return <div className="userCard" >

                            <Card  >
                                <Card.Header>{user.username}</Card.Header>
                                <Card.Title>{}</Card.Title>

                                <Card.Img variant="top" src={`${user.avatar_url}`} />

                                <Card.Body>
                                    <Button variant="primary" href={`/users/${user.username}/articles`} >My Articles</Button>
                                </Card.Body>
                            </Card>



                        </div>
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