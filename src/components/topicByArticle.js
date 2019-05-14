import React, { Component } from 'react'
import { getTopicsbyQuery } from './api'
import { Link } from "@reach/router";

class TopicByArticle extends Component {

    state = {
        topicArticle: []
    }

    render() {
        console.log(this.state.topicArticle)
        return (
            <div>
                {this.state.topicArticle.map(article => {
                    return <Link to={`/articles/${article.article_id}`}><li>{article.title}</li></Link>
                })}
            </div>
        )
    }

    componentDidMount() {
        getTopicsbyQuery(this.props.topic)
            .then(topics => {
                console.log(topics)
                this.setState({ topicArticle: topics })
            })
    }

}

export default TopicByArticle