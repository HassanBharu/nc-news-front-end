import React, { Component } from 'react'
import { getTopicsbyQuery } from './api'
import { Link, navigate } from "@reach/router";
import SortBy from './sortBy'

class TopicByArticle extends Component {

    state = {
        topicArticle: []
    }

    render() {
        console.log(this.props.loggingIn)
        return (
            <div>
                {this.props.loggingIn &&
                    <button className="button3" onClick={() => navigate('/articles/newArticle')}> Add New Article</button>}
                <SortBy o={this.order} />
                <h2 style={{ textAlign: "center" }}>Articles Per Topic</h2>
                <ul>
                    {this.state.topicArticle.map(article => {
                        return <li key={article.article_id} ><Link to={`/articles/${article.article_id}`} ><b>{article.title}</b> <p>Written By: {article.author} <span></span><span></span>  Comment Count: {article.comment_count} <span></span><span></span> Created At: {article.created_at} </p><p>Article Votes: {article.votes}</p></Link></li>
                    })}</ul>
            </div>
        )
    }
    order = (order) => {
        this.setState({ topicArticle: order })
    }

    componentDidMount() {
        getTopicsbyQuery(this.props.topic)
            .then(topics => {
                this.setState({ topicArticle: topics })
            }).catch(({ response }) => {
                navigate('/error', { replace: true, state: { From: 'topics', msg: response.data.msg, status: response.status } })
            })
    }

}

export default TopicByArticle