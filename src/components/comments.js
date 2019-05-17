import React, { Component } from "react";
import { getComments, postComment, deleteComment, patchVotesComments } from './api'
import '../index.css'
import { navigate } from "@reach/router";
import SingleComment from './singleComment'

class Comments extends Component {

    state = {
        comments: [],
        vote: 0
    }

    render() {
        return (
            < div >



                <h4>Comments</h4>

                {this.props.loggedIn && <div> <textarea onChange={this.bodyOfPost}></textarea>  <button onClick={this.handleClick}>Add Comment!</button> </div>}
                <ul>
                    {this.state.comments.map(comment => {
                        return <div key={comment.comment_id}>

                            <li className="ulArticles" >
                                <SingleComment comment={comment} loggedIn={this.props.loggedIn} />

                                {this.props.loggedIn === comment.author
                                    && <button id={comment.comment_id}
                                        onClick={() => this.handleDeleteComment(comment.comment_id)}>Delete</button>}
                                <p>    </p>
                            </li>
                        </div>
                    })
                    }</ul>
            </div >
        )
    }


    bodyOfPost = (inputText) => {
        this.setState({ body: inputText.target.value })
    }

    handleClick = (e) => {
        e.preventDefault()
        postComment(this.props.articleId, this.props.loggedIn, this.state.body)
            .then(comment => {
                this.setState({ comments: [comment, ...this.state.comments] })
            })
    }

    handleDeleteComment = (id) => {
        deleteComment(id).then(() => {
            this.setState({
                comments:
                    this.state.comments.filter(comment => comment.comment_id !== id)
            })
        })
    }

    bodyOfPost = (inputText) => {
        this.setState({ body: inputText.target.value })
    }

    componentDidMount() {
        getComments(this.props.articleId)
            .then(comments => {
                this.setState({ comments })
            })
    }
}


export default Comments
