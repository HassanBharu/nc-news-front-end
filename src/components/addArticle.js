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
                <h2 style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: 'lightblue' }}>Add a new article</h2>

                <form >
                    Title: <input onChange={this.handleTitle} className="input"></input>
                    <p></p>

                    Topic: <select onChange={this.handleTopic} className="button1">
                        <option>....select</option>
                        <option>cooking</option>
                        <option>football</option>
                        <option>coding</option>
                    </select>

                    <p></p>
                    Body:<textarea onChange={this.handleBody} className="input"></textarea>

                    <Button onClick={this.submitArticle} bsStyle="primary">submit</Button>
                </form>

            </div>
        )
    }

    handleTitle = (titleInfo) => {
        this.setState({ title: titleInfo.target.value })
    }

    handleTopic = (topicInfo) => {

        this.setState({ topic: topicInfo.target.value })
    }

    handleBody = (bodyInfo) => {
        this.setState({ body: bodyInfo.target.value })
    }

    componentDidMount() {
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