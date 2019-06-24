import React, { Component } from 'react'


function ArticleCard(props) {



    const { author, comment_count, created_at, title, votes } = props.article
    return (
        <div>
            <h5 style={{ textDecoration: 'underline', fontWeight: 'bold' }} >{title}</h5>
            <p style={{ color: 'darkblue' }}>Author: {author}</p>
            <p style={{ color: 'black' }}>Comments: {comment_count} <span></span><span></span>Created: {created_at.slice(0, 10)} @ {created_at.slice(11, -5)}</p>
            <p style={{ color: 'green' }}>Votes: {votes}</p>


        </div>
    )
}


export default ArticleCard