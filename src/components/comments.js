import React, { Component } from "react";
import { getComments, postComment, deleteComment, patchVotesComments } from './api'
import '../App.css'
import { navigate } from "@reach/router";

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
                {
                    this.state.comments.map(comment => {

                        return <div><li style={border} key={comment.comment_id}>
                            {comment.body}
                            {this.props.loggedIn === comment.author
                                && <button id={comment.comment_id}
                                    onClick={() => this.handleDeleteComment(comment.comment_id)}>Delete</button>}
                            <p>    </p>
                            <div>votes: {comment.votes} | created_at: {comment.created_at} | Author: {comment.author}</div>
                            {this.props.loggedIn && <div>
                                {this.state.vote === 0 ?
                                    <button onClick={() => this.amendVote(comment.comment_id, 1)}>vote +1 </button > :
                                    <button onClick={() => this.amendVote(comment.comment_id, -1)}>vote -1</button>}</div>}
                        </li>
                        </div>
                    })
                }
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
            }).catch(({ response }) => {
                navigate('/error', { replace: true, state: { From: 'comments', msg: response.data.msg, status: response.status } })
            })

    }

    amendVote = (id, number) => {
        patchVotesComments(id, number).then(article => {
            // ignore the data thats come back -> ireelevant / confusing to the user
            this.setState(prevState => {
                return { vote: prevState.vote + number }
            })
            // add 1 to what was already there -> prevStatearticlethis.state.singleArticle

            // why not make a seperate vote property in state -> update that!
            // this property helps to disable buttons at the right time

        })



    }
}

const border = {
    borderWidth: '2px',
    borderStyle: 'inset',
    borderColor: 'coral',
    padding: '5px'
}

export default Comments
