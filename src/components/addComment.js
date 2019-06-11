import React, { Component } from 'react'
import { postComment } from './api'

class AddComment extends Component {

    state = {
        body: '',
        newComment: []
    }

    render() {
        return (

            <div>
                <form>
                    <input onChange={this.bodyOfPost}></input>  <button onClick={this.handleClick}>Add Comment!</button>
                </form>
            </div>
        )
    }

    bodyOfPost = (inputText) => {
        this.setState({ body: inputText.target.value })

    }

    handleClick = (e) => {
        e.preventDefault();

        postComment(this.props.articleId, this.props.loggedState, this.state.body)
            .then(comment => {
                this.props.addComment(comment)

            })
    }


}

export default AddComment;