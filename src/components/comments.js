import React, { Component } from "react";
import { getComments, deleteComment } from './api'
import '../index.css'
import SingleComment from './singleComment'
import AddComment from './addComment'

class Comments extends Component {

    state = {
        comments: [],

    }

    render() {
        return (
            < div >



                <h4>Comments</h4>

                {this.props.loggedIn && <AddComment loggedState={this.props.loggedIn} articleId={this.props.articleId} addComment={this.addToCommentsArray} />}
                <ul>
                    {this.state.comments.map(comment => {
                        return <div key={comment.comment_id}>

                            <li>
                                <SingleComment comment={comment} loggedIn={this.props.loggedIn} />

                                {this.props.loggedIn === comment.author
                                    && <button className="button2" id={comment.comment_id}
                                        onClick={() => this.handleDeleteComment(comment.comment_id)}>Delete Comment</button>}
                                <p>    </p>
                            </li>
                        </div>
                    })
                    }</ul>
            </div >
        )
    }




    handleDeleteComment = (id) => {
        deleteComment(id).then(() => {
            this.setState({
                comments:
                    this.state.comments.filter(comment => comment.comment_id !== id)
            })
        })
    }



    addToCommentsArray = (newComment) => {
        this.setState({ comments: [newComment, ...this.state.comments] })

    }




    componentDidMount() {
        getComments(this.props.articleId)
            .then(comments => {
                this.setState({ comments })
            })

    }
}


export default Comments
