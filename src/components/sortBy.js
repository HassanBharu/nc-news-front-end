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

    componentDidUpdate() {
        orderByQuery(this.state.srotBy)

            .then(artilceOrder => {

                this.props.o(artilceOrder)
            })
    }


    handleChange = (e) => {
        this.setState({ sortBy: e.target.value })


    }








}

export default SortBy