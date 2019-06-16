import React, { Component } from 'react'
import { getAllArticles, deleteArticle } from './api'
import { Link, navigate } from "@reach/router";
import SortBy from './sortBy'
import '../index.css'
import { Button } from 'react-bootstrap'

class AllArticles extends Component {
    state = {
        articles: [],
        order: null
    }
    render() {
        return (<div>



            <p>
                {this.props.loggingIn &&
                    <Button variant="info" bsStyle="info" onClick={() => navigate('/articles/newArticle')}>Add new Article</Button>}
            </p>

            <SortBy o={this.order} oder={this.state.articles} />
            <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>All Articles</h2>
            <ul >
                {/* listing all the articles in a list */}
                {this.state.articles.map(article => {
                    return <li key={article.article_id} ><Link to={`/articles/${article.article_id}`} ><b>{article.title}</b><p>Written By: {article.author} <p></p> comment_count: {article.comment_count} <span></span><span></span> Created: {article.created_at} </p><p style={{ color: 'green' }}>Article Votes: {article.votes}</p></Link>

                        <p></p>
                        {
                            this.props.loggingIn === article.author && <button className="deleteCommentButton" onClick={() => this.handleDeleteArticle(article.article_id)} >Delete Article: {article.title}</button>
                        }
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



    componentDidMount() {
        getAllArticles().then(articles => {
            this.setState({ articles })
        })


    }
}

export default AllArticles