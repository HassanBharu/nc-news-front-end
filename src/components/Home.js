import React, { Component } from 'react'
import { getArticles } from './api'
import { Link } from "@reach/router";
import SortBy from './SortBy'
import ArticleCard from './ArticleCard'
class Home extends Component {
    state = {
        articles: [],
        order: null
    }

    render() {
        return (
            <div>
                <h5 style={{ backgroundColor: 'lightgreen', textAlign: 'center' }}>Welcome to NcNews where you will be able to find articles from across the world </h5>

                <div> <SortBy o={this.order} /></div>

                <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>Top 10 Trending Articles</h2>

                <ul>
                    {this.state.articles.map(article => {
                        return <li key={article.article_id}><Link to={`/articles/${article.article_id}`}>

                            <ArticleCard article={article} />

                        </Link> </li>
                    })}
                </ul>
            </div>
        )
    }
    order = (order) => {
        this.setState({ articles: order })
    }

    componentDidMount() {

        getArticles().then(articles => {
            this.setState({ articles })
        })

    }

}





export default Home;