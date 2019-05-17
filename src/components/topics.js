import React, { Component } from 'react'
import { getTopics } from './api'
import { Link } from '@reach/router'
import '../index.css'

class Topics extends Component {

    state = {
        topics: []
    }

    render() {
        return (
            <div>
                <ul>    {this.state.topics.map(topic => {
                    return <Link to={`/topics/${topic.slug}`} key={topic.slug}> <li className="ulArticles">{topic.slug} <p>Description: {topic.description}</p></li></Link>
                })}
                </ul>


            </div>
        )
    }

    componentDidMount() {
        getTopics()
            .then(topic => {
                this.setState({ topics: topic })
            })


    }
}
export default Topics