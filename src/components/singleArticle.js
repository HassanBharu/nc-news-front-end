import React, { Component } from "react";
import { getSingleArticle, patchVotes, deleteArticle } from './api'
import '../App.css'
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
        const { title, body, votes, created_at, author, article_id } = this.state.singleArticle
        console.log(this.state)
        return (
            < div >
                <h2 style={{ textAlign: 'center' }}>Article <p>{title}</p></h2>

                {body}
                <p></p>
                <div className="ulArticles">Votes: {votes + this.state.vote} | created_at: {created_at} | Author: {author}
                    {this.props.loggingIn &&
                        <div>
                            {this.state.vote === 0 ?
                                <button onClick={() => this.amendVote(1)} className="likeButton">vote +1 </button > :
                                <button onClick={() => this.amendVote(-1)}>vote -1</button>}
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