import React, { Component } from 'react'
import { getUserArticles } from './api'
import { Link } from '@reach/router'


class UsersArticles extends Component {
    state = {
        articles: []
    }

    render() {
        const { articles } = this.state
        return (
            <div>
                <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>
                    My Articles
                </h2>
                <ul>
                    {articles.map(article => {
                        console.log(article)
                        return <li key={article.article_id}>
                            <Link to={`/articles/${article.article_id}`}>
                                Title: {article.title}
                                <p></p>
                                Author: {article.author}
                                <span></span><span></span>
                                Topic: {article.topic}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        getUserArticles(this.props.username)
            .then(articles => {
                this.setState({ articles })

            })
    }

}

export default UsersArticles