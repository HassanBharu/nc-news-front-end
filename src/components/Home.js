import React, { Component } from 'react'
import { getArticles } from './api'
import { Link } from "@reach/router";
import SortBy from './sortBy'

class Home extends Component {
    state = {
        articles: [],
        order: null
    }

    render() {
        return (
            <div>
                <div> <SortBy o={this.order} /></div>
                <h2 style={{ textAlign: 'center' }}>Top 10 trending articles by vote</h2>
                <ul>{this.state.articles.map(article => { return <li key={article.article_id}><Link to={`/articles/${article.article_id}`}>{article.title}<p>written by:  {article.author}</p><p>Articles Votes: {article.votes}</p></Link></li> })}</ul>
            </div>
        )
    }
    order = (order) => {
        this.setState({ order })
    }

    componentDidMount() {

        getArticles().then(articles => {
            this.setState({ articles })
        })

    }

}





export default Home;