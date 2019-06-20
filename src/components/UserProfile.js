import React, { Component } from 'react'
import { getUserByName, getUserArticles } from './api'
import { navigate } from '@reach/router'
import { Card, Button } from 'react-bootstrap'


class UserProfile extends Component {

    state = {
        user: [],
        articles: []
    }
    render() {
        const { username, avatar_url, name } = this.state.user
        console.log(avatar_url)
        return (
            <div>
                <Card className="userCard">
                    <Card.Img src={`${avatar_url}`}></Card.Img>



                </Card>

                <Card>
                    <Card.Header>{username}</Card.Header>
                    <Card.Body>
                        <Card.Title>InFo</Card.Title>
                        <Card.Text>
                            Name:  {name}
                            <div></div>
                            number of articles created: {this.state.articles.length}

                        </Card.Text>
                        <Button variant="primary" href="/articles/newArticle">Add New Article</Button>
                        <p></p>
                        <Button variant="primary" href={`/users/${username}/articles`}>Go To My Articles</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    componentDidMount() {
        getUserByName(this.props.username)
            .then(user => {

                this.setState({ user })

            }).catch(({ response }) => {
                navigate('/error', { replace: true, state: { From: 'Users', msg: response.data.msg, status: response.status } })
            })

        getUserArticles(this.props.username)
            .then(articles => {
                this.setState({ articles })
            })
    }
}

export default UserProfile