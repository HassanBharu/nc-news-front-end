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
                <div className="eachComment" >



                    <div >{comment.author} says: <p></p> {comment.created_at}



                        {this.props.loggedIn &&
                            <div>

                                votes: {comment.votes + this.state.votes}<span></span> <span></span>
                                <button disabled={this.state.votes === 1} onClick={() => this.amendVote(comment.comment_id, 1)}>Like </button >
                                <span></span> <span></span>
                                <button disabled={this.state.votes === -1} onClick={() => this.amendVote(comment.comment_id, -1)}>Dislike</button></div>}


                    </div></div>
                {<span className="commentBody">
                    {comment.body}
                </span>}

            </div >
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