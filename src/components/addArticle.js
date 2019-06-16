import React, { Component } from 'react'
import { navigate } from '@reach/router'
import { postArticle } from './api'
import { Button } from 'react-bootstrap'
import '../index.css'

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
                <h4 style={{ textAlign: 'center', backgroundColor: 'lightblue' }}>Add a new article</h4>

                <form >
                    Title: <input onChange={this.handleTitle} className="input"></input>
                    <p></p>

                    Topic: <select onChange={this.handleTopic} className="button1">
                        <option>Cooking</option>
                        <option>Football</option>
                        <option>Coding</option>
                    </select>

                    <p></p>
                    Body:<textarea className="myText2" onChange={this.handleBody} className="input"></textarea>
                    <p></p>
                    <Button onClick={this.submitArticle} bsStyle="info">Submit</Button>
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
            })
    }

}

export default AddArticle