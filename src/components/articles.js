import React, { Component } from 'react'
import { getArticles } from './api'
import { Link } from "@reach/router";

class Articles extends Component {
    state = {
        articles: []
    }

    render() {
        return (<div>
            <ul>{this.state.articles.map(article => { return <li key={article.article_id}><Link to={`/articles/${article.article_id}`}>{article.title}</Link></li> })}</ul>
            <h5>sort articles by:</h5>
            <button>votes</button>
            <button>created at</button>
        </div>
        )
    }

    componentDidMount() {

        getArticles().then(articles => {
            this.setState({ articles })
        })

    }
}



export default Articles;