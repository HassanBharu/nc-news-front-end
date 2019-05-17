import React, { Component } from 'react'
import { orderByComment } from './api'


class SortBy extends Component {
    state = {
        artilceOrder: []
    }
    render() {
        console.log(this.props.order)

        return (<div>
            <h5>sort articles by:</h5>
            <select >
                <option value="votes" > Votes </option>
                <option value="comment_count"> Comment Count </option>
                <option value="created_at"> Created At </option>
            </select>
        </div>
        )
    }

    handleClick = (e) => {

        console.log('clickkk')
        e.preventDefault()

        orderByComment(e.target.value)
            .then(articleOrder => {
                this.setState({ articleOrder })
            })
    }

    //   console.log(e.target)






}

export default SortBy