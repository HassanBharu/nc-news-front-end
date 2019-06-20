import React, { Component } from 'react'
import { getAllArticles, deleteArticle } from './api'
import { Link, navigate } from "@reach/router";
import SortBy from './SortBy'
import ArticleCard from './ArticleCard'
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
                    <Button variant="info" onClick={() => navigate('/articles/newArticle')}>Add new Article</Button>
                }
            </p>

            <SortBy o={this.order} oder={this.state.articles} />

            <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}><i class="far fa-newspaper"></i> All Articles </h2>
            <ul >

                {

                    this.state.articles.map(article => {
                        return <li key={article.article_id} ><Link to={`/articles/${article.article_id}`} >

                            <ArticleCard article={article} />

                        </Link>

                            {
                                this.props.loggingIn === article.author && <Button block variant="warning" onClick={() => this.handleDeleteArticle(article.article_id)} > <span style={{ fontWeight: 'bold' }}>Delete Article: </span>{article.title}</Button>
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