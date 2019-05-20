import Axios from 'axios';

const URL = 'https://hassan-nc-news.herokuapp.com/api'

export const getArticles = () => {
    return Axios.get(`${URL}/articles`)
        .then(({ data: { articles } }) => {
            return articles
        })
}

export const getAllArticles = () => {
    return Axios.get(`${URL}/articles?limit=100`)
        .then(({ data: { articles } }) => {
            return articles
        })
}

export const getUsers = (username) => {
    return Axios.get(`${URL}/users/${username}`)
        .then(({ data: { user } }) => {
            return user
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
            return topics
        })
}

export const getTopicsbyQuery = (query) => {
    return Axios.get(`${URL}/articles?topic=${query}`)
        .then(({ data: { articles } }) => {
            return articles
        })
}

export const orderByVotes = () => {
    return Axios.get(`${URL}/articles?sort_by=votes`)
        .then(({ data: { articles } }) => {
            //  console.log(articles)
            return articles
        })
}

export const orderByComment = (query) => {
    return Axios.get(`${URL}/articles?sort_by=${query}`)
        .then(({ data: { articles } }) => {
            return articles
        })
}

export const postComment = (article_id, username, body) => {
    // console.log(article_id, username, body)
    return Axios.post(`${URL}/articles/${article_id}/comments`, { username, body })
        .then(({ data: { comment } }) => {
            return comment
        })
}

export const deleteComment = (comment_id) => {
    console.log(comment_id)
    // console.log(article_id, username, body)
    return Axios.delete(`${URL}/comments/${comment_id}`)


}

export const patchVotes = (article_id, number) => {
    return Axios.patch(`${URL}/articles/${article_id}`, { inc_votes: number })
        .then(({ data: { article } }) => {

            return article
        })
}

export const patchVotesComments = (comment_id, number) => {
    return Axios.patch(`${URL}/comments/${comment_id}`, { inc_votes: number })
        .then(({ data: { comment } }) => {

            return comment
        })
}

export const getSingleComment = (comment_id) => {
    return Axios.get(`${URL}/comments/${comment_id}`)
        .then(({ data: { comment } }) => {
            return comment
        })
}



