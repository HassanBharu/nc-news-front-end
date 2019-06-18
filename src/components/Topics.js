import React, { Component } from 'react'
import { getTopics } from './api'
import { Link, navigate } from '@reach/router'
import '../index.css'

class Topics extends Component {

    state = {
        topics: []
    }

    render() {
        return (
            <div>
                <p></p>
                <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>Topics</h2>

                <ul>    {this.state.topics.map(topic => {
                    return <li key={topic.slug}><Link to={`/topics/${topic.slug}`} > {topic.slug} <p>Description: {topic.description}</p></Link></li>
                })}
                </ul>


            </div>
        )
    }

    componentDidMount() {
        getTopics()
            .then(topic => {
                this.setState({ topics: topic })
            }).catch(({ response }) => {
                navigate('/error', { replace: true, state: { From: 'topics', msg: response.data.msg, status: response.status } })
            })


    }
}
export default Topics