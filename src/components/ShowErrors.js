import React from 'react'


const ShowErrors = (props) => {
    const { status, From, msg } = props.location.state

    //  console.log(props)

    return (
        <div>
            <p>Oops! Error: {status}</p>
            <p>{From}: {msg} </p>
        </div>
    )
}



export default ShowErrors;