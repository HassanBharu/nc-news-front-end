import Axios from 'axios';

const URL = 'https://hassan-nc-news.herokuapp.com/api'

export const getArticles = () => {
    return Axios.get(`${URL}/articles`)
        .then(({ data: { articles } }) => {
            return articles
        })
}

export const getUsers = (username) => {
    return Axios.get(`${URL}`)
        .then(({ data: { users } }) => {
            return users
        })
}

export const getSingleArticle = (article_id) => {
    return Axios.get(`${URL}/articles/${article_id}`)
        .then(({ data: { article } }) => {
            return article
        })
}

export const getComments = (article_id) => {
    return Axios.get(`${URL}/articles/${article_id}/comments`)
        .then(({ data: { comments } }) => {
            return comments
        })
}

export const getTopics = () => {
    return Axios.get(`${URL}/topics`)
        .then(({ data: { topics } }) => {
            //  console.log(topics)
            return topics
        })
}

export const getTopicsbyQuery = (query) => {
    return Axios.get(`${URL}/articles?topic=${query}`)
        .then(({ data: { articles } }) => {
            //   console.log(data)
            return articles
        })
}


