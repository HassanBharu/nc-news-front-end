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
                <form onSubmit={this.handleClick}>
                    <input className="myText" id="commentInput" onChange={this.bodyOfPost}></input>  <button onClick={this.clear}>Add Comment!</button>
                </form>
            </div>
        )
    }



    bodyOfPost = (inputText) => {
        this.setState({ body: inputText.target.value })

    }

    clear = () => {
        document.getElementById('commentInput').value = ""
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({ body: '' })
        postComment(this.props.articleId, this.props.loggedState, this.state.body)
            .then(comment => {
                this.props.addComment(comment)

            })


    }


}

export default AddComment;