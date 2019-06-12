import React from 'react'


const ShowErrors = (props) => {
    const { status, From, msg } = props.location.state

    //  console.log(props)

    return msg ? (
        <div>
            <h3>Oops! Error {status} {From}, {msg}</h3>
            <h3> </h3>
        </div>
    ) : <h1>error</h1>
}



export default ShowErrors;