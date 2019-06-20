import React, { Component } from 'react'


class ArticleCard extends Component {

    state = {
        eachArticle: []
    }

    render() {
        const { author, body, comment_count, created_at, title, topic, votes } = this.props.article
        return (
            <div>
                <h5 style={{ textDecoration: 'underline', fontWeight: 'bold' }} >{title}</h5>
                <p style={{ color: 'darkblue' }}>Author: {author}</p>
                <p style={{ color: 'black' }}>Comments: {comment_count} <span></span><span></span>Created: {created_at}</p>
                <p style={{ color: 'green' }}>Votes: {votes}</p>


            </div>
        )
    }
}

export default ArticleCard