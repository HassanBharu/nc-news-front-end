import React, { Component } from 'react'
import { getAllArticles, deleteArticle } from './api'
import AddArticle from './addArticle'
import { Link } from "@reach/router";
import SortBy from './sortBy'
import '../index.css'

class AllArticles extends Component {
    state = {
        articles: []
    }
    render() {
        console.log(this.state.articles)
        return (<div>
            <SortBy o={this.order} />

            {this.props.loggingIn &&
                <Link to="/articles/newArticle">Add new Article</Link>}



            <h1 style={{ textAlign: 'center' }}>All Articles</h1>
            <ul >
                {/* listing all the articles in a list */}
                {this.state.articles.map(article => {
                    return <li key={article.article_id} ><Link to={`/articles/${article.article_id}`} ><b>{article.title}</b><p>Written By:{article.author} | comment_count: {article.comment_count} | Created_At: {article.created_at} </p><p>Article Votes: {article.votes}</p></Link>

                        {this.props.loggingIn === article.author && <button onClick={() => this.handleDeleteArticle(article.article_id)} style={{ float: 'inherit' }}>Delete article</button>}
                        <p></p>



                        {/* delete article button */}


                    </li>
                })}
            </ul>
            {/* end */}
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
        })


    }


    componentDidMount() {
        getAllArticles().then(articles => {
            this.setState({ articles })
        })


    }
}

export default AllArticles