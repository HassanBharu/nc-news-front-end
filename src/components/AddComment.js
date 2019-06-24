import React, { Component } from 'react'
import { postComment } from './api'
import { navigate } from '@reach/router'

class AddComment extends Component {

    state = {
        body: '',
    }

    render() {

        return (

            <div>

                <form onSubmit={this.handleClick}>

                    <input className="myText" id="commentInput" value={this.state.body} onChange={this.newComment} required="true" ></input>


                    <button>Add Comment <i class="fas fa-plus-square"></i></button>

                </form>
            </div>
        )
    }



    newComment = (inputText) => {
        this.setState({ body: inputText.target.value })

    }


    handleClick = (e) => {
        e.preventDefault();
        postComment(this.props.articleId, this.props.loggedState, this.state.body)
            .then(comment => {
                this.props.addComment(comment)
                this.setState({ body: '' })
            }).catch(({ response }) => {
                navigate('/error', { replace: true, state: { From: 'comments cannot be empty', msg: response.data.msg, status: response.status } })
            })


    }


}

export default AddComment;