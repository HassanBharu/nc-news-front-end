import React, { Component } from 'react'
import { getTopicsbyQuery } from './api'
import { Link } from "@reach/router";

class TopicByArticle extends Component {

    state = {
        topicArticle: []
    }

    render() {
        //  console.log(this.props.login)
        return (
            <div>
                {this.props.loggingIn && <button>add new article</button>}
                <ul>
                    {this.state.topicArticle.map(article => {
                        return <li key={article.article_id} ><Link to={`/articles/${article.article_id}`} className="ulArticles" >{article.title} <p>Written By: {article.author} | Article Votes: {article.votes} </p></Link></li>
                    })}</ul>
            </div>
        )
    }

    componentDidMount() {
        getTopicsbyQuery(this.props.topic)
            .then(topics => {
                this.setState({ topicArticle: topics })
            })
    }

}

export default TopicByArticle