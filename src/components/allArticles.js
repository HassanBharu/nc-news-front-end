import React, { Component } from 'react'
import { getAllArticles } from './api'
import { Link } from "@reach/router";
import SortBy from './sortBy'
import '../index.css'

class AllArticles extends Component {
    state = {
        articles: []
    }
    render() {
        return (<div>
            <SortBy />

            <h4>All articles</h4>
            <ul>
                {this.state.articles.map(article => {
                    return <Link to={`/articles/${article.article_id}`} key={article.article_id}><li>{article.title}</li></Link>
                })}
            </ul>
        </div>
        )
    }
    componentDidMount() {
        getAllArticles().then(articles => {
            this.setState({ articles })
        })
    }
}

export default AllArticles