import React, { Component } from 'react'
import { navigate } from '@reach/router'
import { postArticle } from './api'
import { Button } from 'react-bootstrap'

class AddArticle extends Component {
    state = {
        title: '',
        body: '',
        topic: '',

    }
    render() {
        return (
            <div>
                {this.props.logg}
                <h4 style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: 'lightblue' }}>Add a new article</h4>

                <form onSubmit={this.submitArticle} >

                    Title: <input onChange={this.handleTitle} className="input" required={true}></input>
                    <p></p>

                    Topic: <select onChange={this.handleTopic} className="button1">
                        <option>....select</option>
                        <option>cooking</option>
                        <option>football</option>
                        <option>coding</option>
                    </select>

                    <p></p>
                    Body:<textarea onChange={this.handleBody} className="input" required={true}></textarea>

                    <button>Add Comment <i class="fas fa-plus-square"></i></button>
                </form>

            </div>
        )
    }

    handleTitle = (event) => {
        this.setState({ title: event.target.value })
    }

    handleTopic = (event) => {

        this.setState({ topic: event.target.value })
    }

    handleBody = (event) => {
        this.setState({ body: event.target.value })
    }

    submitArticle = (e) => {
        e.preventDefault()
        const { title, body, topic } = this.state
        postArticle(title, body, topic, this.props.loggingIn)
            .then(article => {
                navigate(`/articles/${article.article[0].article_id}`)
            }).catch(({ response }) => {
                navigate('/error', { replace: true, state: { From: 'topics', msg: response.data.msg, status: response.status } })
            })
    }

}

export default AddArticle