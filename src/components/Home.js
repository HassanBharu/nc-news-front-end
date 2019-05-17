import React, { Component } from 'react'
import { getArticles } from './api'
import { Link } from "@reach/router";
import SortBy from './sortBy'

class Home extends Component {
    state = {
        articles: []
    }

    render() {
        return (
            <div>
                <SortBy order={this.articleOrder} />
                <h3>Top 10 trending articles by vote</h3>
                <ul>{this.state.articles.map(article => { return <li key={article.article_id}><Link to={`/articles/${article.article_id}`}>{article.title}</Link></li> })}</ul>
            </div>
        )
    }
    articleOrder = (order) => {
        this.setState({ articles: order })
    }

    componentDidMount() {

        getArticles().then(articles => {
            this.setState({ articles })
        })

    }

}





export default Home;