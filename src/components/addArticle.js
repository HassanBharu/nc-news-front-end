import React, { Component } from 'react'
import { navigate } from '@reach/router'
import { postArticle } from './api'

class AddArticle extends Component {
    state = {
        title: '',
        body: '',
        topic: '',
        article: []

    }
    render() {
        return (
            <div>
                <h3 style={{ textAlign: 'center' }}>Add a new article</h3>

                <form >
                    Title: <input onChange={this.title} className="input"></input>
                    <p></p>

                    topic: <select onChange={this.topic} className="button1">
                        <option>cooking</option>
                        <option>football</option>
                        <option>coding</option>
                    </select>

                    <p></p>
                    body:<textarea onChange={this.body} className="input"></textarea>

                    <button onClick={this.submitArticle} className="button1">submit</button>
                </form>

            </div>
        )
    }

    title = (titleInfo) => {
        this.setState({ title: titleInfo.target.value })
    }

    topic = (topicInfo) => {

        this.setState({ topic: topicInfo.target.value })
    }

    body = (bodyInfo) => {
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