import React, { Component } from "react";
import { getSingleArticle, patchVotes } from './api'
import '../App.css'
import '../index.css'
import { navigate } from "@reach/router";
import Comments from './Comments'
import { Spinner } from 'react-bootstrap'


class SingleArticle extends Component {

    state = {
        singleArticle: {},
        vote: 0,
    }

    render() {
        if (this.state.singleArticle.votes === undefined)
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>


        const { title, body, votes, created_at, author } = this.state.singleArticle
        return (
            < div >
                <h2 style={{ textAlign: 'center', textDecoration: "underline", color: 'blue' }}> <p>{title}</p></h2>

                {body}
                <p></p>
                <div> <span></span>Written By: {author}  <p></p>Date: {created_at.slice(0, 10)} @{created_at.slice(11, -5)}<p></p>

                    Vote: {this.state.vote + votes}

                    {this.props.loggingIn &&
                        <div>
                            <span></span><span></span>

                            <button className="button1" disabled={this.state.vote === 1} onClick={() => this.amendVote(1)}><i class="far fa-thumbs-up"></i> Like</button >

                            <span></span><span></span>

                            <button className="button1" disabled={this.state.vote === -1} onClick={() => this.amendVote(-1)}><i class="far fa-thumbs-down"></i> Dislike</button>
                        </div>
                    }
                </div>

                {this.state.singleArticle.article_id && <Comments articleId={this.props.article_id}
                    loggedIn={this.props.loggingIn} />}


            </div >

        )

    }


    amendVote(number) {
        if (this.state.isLoading) return <p>loading</p>

        patchVotes(this.props.article_id, number)

        this.setState(prevState => {
            return { vote: prevState.vote + number, isLoading: false }
        })

    }





    componentDidMount() {
        getSingleArticle(this.props.article_id)
            .then(article => {
                this.setState({ singleArticle: article })
            }).catch(({ response }) => {
                navigate('/error', { replace: true, state: { From: 'articles', msg: response.data.msg, status: response.status } })
            })

    }

}



export default SingleArticle