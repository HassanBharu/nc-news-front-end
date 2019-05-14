import React, { Component } from "react";
import { getSingleArticle, getComments } from './api'

class SingleArticle extends Component {

    state = {
        singleArticle: {},
        comments: []

    }
    render() {

        const { title, body, votes, created_at, author } = this.state.singleArticle


        return (
            < div >
                <h4>Article: {title}</h4>
                {body}
                <p></p>
                <div>Votes: {votes} | created_at: {created_at} | Author: {author}</div>
                <h4>Comments</h4>
                {this.state.comments.map(comment => {
                    return <li key={comment.comment_id}>{comment.body}</li>
                })}

                <h6>sort articles by:</h6>
                <button>votes</button>
                <button>created at</button>
            </div >

        )

    }

    componentDidMount() {
        getSingleArticle(this.props.article_id)
            .then(article => {
                this.setState({ singleArticle: article })
            }).catch(console.log)

        getComments(this.props.article_id)
            .then(comments => {
                this.setState({ comments })
            }).catch(console.log)


    }

}

export default SingleArticle