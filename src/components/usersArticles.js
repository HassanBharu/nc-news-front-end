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
            <ul>
                {articles.map(article => {
                    return <li key={article.article_id}><Link to={`/articles/${article.article_id}`}>{article.title}</Link></li>
                })}
            </ul>
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