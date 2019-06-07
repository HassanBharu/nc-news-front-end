import React, { Component } from 'react'
import { getAllArticles, deleteArticle } from './api'
import AddArticle from './addArticle'
import { Link, navigate } from "@reach/router";
import SortBy from './sortBy'
import '../index.css'

class AllArticles extends Component {
    state = {
        articles: []
    }
    render() {
        console.log(this.state.a)
        return (<div>
            <div>



                {this.props.loggingIn &&
                    <button onClick={() => this.newArticle('/articles/newArticle')}>Add new Article</button>}
            </div>
            <SortBy o={this.order} />

            <h1 style={{ textAlign: 'center' }}>All Articles</h1>
            <ul >
                {/* listing all the articles in a list */}
                {this.state.articles.map(article => {
                    return <li key={article.article_id} ><Link to={`/articles/${article.article_id}`} ><b>{article.title}</b><p>Written By: {article.author} <span></span><span></span> comment_count: {article.comment_count} <span></span><span></span> Created_At: {article.created_at} </p><p>Article Votes: {article.votes}</p></Link>

                        {this.props.loggingIn === article.author && <button className="deleteCommentButton" onClick={() => this.handleDeleteArticle(article.article_id)} >Delete Article: {article.title}</button>
                        }
                        <p></p>
                    </li>
                })}
            </ul>
        </div>
        )
    }

    order = (order) => {
        this.setState({ articles: order })
    }

    handleDeleteArticle = (id) => {
        console.log(id)
        deleteArticle(id).then(() => {
            this.setState(prevState => {
                return {
                    articles: prevState.articles.filter(article => (
                        article.article_id !== id
                    ))
                }
            })
        }).catch(err => console.error(err))


    }

    newArticle = (goTo) => {
        navigate(`${goTo}`)
    }


    componentDidMount() {
        getAllArticles().then(articles => {
            this.setState({ articles })
        })


    }
}

export default AllArticles