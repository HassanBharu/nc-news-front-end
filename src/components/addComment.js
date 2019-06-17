import React, { Component } from 'react'
import { postComment } from './api'
import { navigate } from '@reach/router'

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

            }).catch(({ response }) => {
                navigate('/error', { replace: true, state: { From: 'topics', msg: response.data.msg, status: response.status } })
            })


    }


}

export default AddComment;