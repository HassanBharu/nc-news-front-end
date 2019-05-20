import React, { Component } from 'react'
import { patchVotesComments } from './api'


class SingleComment extends Component {

    state = {
        votes: 0
    }

    render() {
        const { comment } = this.props
        return (
            <div>
                <p>{comment.body}</p>

                <div><p> created_at: {comment.created_at} </p> <p>Author: {comment.author}</p><p>votes: {comment.votes + this.state.votes} </p></div>

                {this.props.loggedIn &&
                    <div>
                        {this.state.votes === 0 ?
                            <button onClick={() => this.amendVote(comment.comment_id, 1)}>vote +1 </button > :
                            <button onClick={() => this.amendVote(comment.comment_id, -1)}>vote -1</button>}</div>}

            </div>
        )
    }

    amendVote = (id, number) => {
        patchVotesComments(id, number).then(article => {
            this.setState(prevState => {
                return { votes: prevState.votes + number }
            })
        })
    }
}

export default SingleComment