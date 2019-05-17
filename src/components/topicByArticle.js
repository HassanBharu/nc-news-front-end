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
                {this.state.topicArticle.map(article => {
                    return <Link key={article.article_id} to={`/articles/${article.article_id}`}><li>{article.title}</li></Link>
                })}
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