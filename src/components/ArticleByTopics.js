import React, { Component } from 'react'
import { getTopicsbyQuery } from './api'
import { Link, navigate } from "@reach/router";
import SortBy from './SortBy'
import { Button } from 'react-bootstrap'
import ArticleCard from './ArticleCard'

class ArticleByTopics extends Component {

    state = {
        topicArticle: []
    }

    render() {

        return (
            <div>
                {this.props.loggingIn &&
                    <Button style={{ marginBottom: '2px' }} variant="info" href="/articles/newArticle"> Add New Article</Button>}

                <SortBy o={this.order} />

                <h2 style={{ textAlign: "center", fontWeight: 'bold', textDecoration: 'underline' }}>Articles Available </h2>

                <ul>
                    {this.state.topicArticle.map(article => {

                        return <li key={article.article_id} ><Link to={`/articles/${article.article_id}`} >

                            <ArticleCard article={article} />

                        </Link>

                        </li>

                    })}

                </ul>
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

export default ArticleByTopics