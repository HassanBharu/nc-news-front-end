import React, { Component } from 'react'
import { orderByComment } from './api'


class SortBy extends Component {
    state = {
        artilceOrder: []
    }
    render() {

        return (<div>
            <h5>sort articles by:</h5>
            <select onClick={this.handleClick} >
                <option value="votes" > Votes </option>
                <option value="comment_count"> Comment Count </option>
                <option value="created_at"> Created At </option>
            </select>
        </div>
        )
    }


    handleClick = (e) => {
        orderByComment(e.target.value)
            .then(artilceOrder => {
                this.props.o(artilceOrder)
            })

    }








}

export default SortBy