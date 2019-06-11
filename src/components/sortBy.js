import React, { Component } from 'react'
import { orderByQuery } from './api'


class SortBy extends Component {

    state = {
        artilceOrder: [],
        sortBy: ''
    }

    render() {
        return (<div>
            <h5>sort articles by:</h5>
            <select onChange={this.handleChange} value={this.state.sortBy} >
                <option>select order</option>
                <option value="votes" > Votes </option>
                <option value="comment_count"> Comment Count </option>
                <option value="created_at"> Created At </option>
            </select>
        </div>
        )
    }


    handleChange = (e) => {
        this.setState({ sortBy: e.target.value })
        orderByQuery(e.target.value)

            .then(artilceOrder => {

                this.props.o(artilceOrder)
            })

    }








}

export default SortBy