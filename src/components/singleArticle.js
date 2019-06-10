import React, { Component } from "react";
import { getSingleArticle, patchVotes } from './api'
import '../App.css'
import '../index.css'
import { navigate } from "@reach/router";
import Comments from './comments'
/* import like from '../images/like.jpg' */

class SingleArticle extends Component {

    state = {
        singleArticle: {},
        body: '',
        vote: 0

    }

    render() {
        const { title, body, votes, created_at, author } = this.state.singleArticle
        return (
            < div >
                <h2 style={{ textAlign: 'center' }}>Article <p>{title}</p></h2>

                {body}
                <p></p>
                <div className="ulArticles"> Written By: {author}  <span></span> <span></span> {created_at}<p></p>Votes: {votes + this.state.vote}
                    {this.props.loggingIn &&
                        <div>

                            <button className="button1" disabled={this.state.vote === 1} onClick={() => this.amendVote(1)}>Like</button >
                            <span></span><span></span>
                            <button className="button1" disabled={this.state.vote === -1} onClick={() => this.amendVote(-1)}>Dislike</button>
                        </div>
                    }
                </div>

                {this.state.singleArticle.article_id && <Comments articleId={this.props.article_id} loggedIn={this.props.loggingIn} />}


            </div >

        )

    }



    amendVote = (number) => {

        patchVotes(this.props.article_id, number).then(article => {

            this.setState(prevState => {
                return { vote: prevState.vote + number }
            })
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