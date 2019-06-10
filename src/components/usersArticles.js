import React, { Component } from 'react'
import { getUserArticles } from './api'
import { Link } from '@reach/router'


class UsersArticles extends Component {
    state = {
        articles: []
    }

    render() {
        const { articles } = this.state
        console.log(articles)
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Users Articles</h1>
                <ul>
                    {articles.map(article => {
                        return <li key={article.article_id}><Link to={`/articles/${article.article_id}`}>{article.title}</Link></li>
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