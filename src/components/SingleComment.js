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
                    <div>
                        <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                            {comment.author}
                        </span>
                        says:
                        <p></p>
                        {comment.body}
                        <p></p>
                    </div>
                </div>
                {<span className="commentBody">

                    {this.props.loggedIn ?

                        <div >

                            votes: {comment.votes + this.state.votes}<span></span> <span></span>

                            <button disabled={this.state.votes > 0} onClick={() => this.amendVote(comment.comment_id, 1)}><i class="far fa-thumbs-up"></i> Like </button >

                            <span></span> <span></span>

                            <button disabled={this.state.votes < 0} onClick={() => this.amendVote(comment.comment_id, -1)}><i class="far fa-thumbs-down"></i> Dislike</button>

                            <span style={{ float: 'right' }} ><i class="fas fa-calendar-alt"></i> created: {comment.created_at}</span>

                        </div> :
                        <div>

                            votes: {comment.votes + this.state.votes}

                            <span style={{ float: 'right' }} >created: {comment.created_at}</span>
                        </div>}
                </span>}


            </div >
        )
    }

    amendVote = (id, number) => {
        patchVotesComments(id, number)
        this.setState(prevState => {
            return { votes: prevState.votes + number }
        })

    }
}



export default SingleComment