import React, { Component } from 'react'
import { orderByQuery } from './api'
import { Dropdown } from 'react-bootstrap'


class SortBy extends Component {

    state = {
        artilceOrder: [],
        sortBy: ''
    }

    render() {
        return (<div>

            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Sort Articles By
  </Dropdown.Toggle>

                <Dropdown.Menu value={this.state.sortBy}>
                    <Dropdown.Item as="button" value="votes" onClick={this.handleChange}>Votes</Dropdown.Item>
                    <Dropdown.Item as="button" value="comment_count" onClick={this.handleChange}>Comments</Dropdown.Item>
                    <Dropdown.Item as="button" value="created_at" onClick={this.handleChange}>Created Time</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>



        </div>
        )
    }

    componentDidUpdate() {
        orderByQuery(this.state.sortBy)

            .then(artilceOrder => {

                this.props.o(artilceOrder)
            })
    }


    handleChange = (e) => {
        console.log(e.target.value)

        this.setState({ sortBy: e.target.value })


    }








}

export default SortBy