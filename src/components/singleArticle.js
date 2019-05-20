import React, { Component } from "react";
import { getSingleArticle, patchVotes } from './api'
import '../App.css'
import { navigate } from "@reach/router";
import Comments from './comments'
/* import like from '../images/like.jpg' */

class SingleArticle extends Component {

    state = {
        singleArticle: {},
        comments: [],
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

    // TODO: 1 function to hadnle both direction voting

    amendVote = (number) => {
        //   console.log(number)
        patchVotes(this.props.article_id, number).then(article => {
            // ignore the data thats come back -> ireelevant / confusing to the user
            this.setState(prevState => {
                return { vote: prevState.vote + number }
            })
            // add 1 to what was already there -> prevStatearticlethis.state.singleArticle

            // why not make a seperate vote property in state -> update that!
            // this property helps to disable buttons at the right time

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



/* const articleInfo = {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'grey',
    textAlign: 'centre'
} */

export default SingleArticle