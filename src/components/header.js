import React from 'react'
import '../index.css'
import { Jumbotron, Container } from 'react-bootstrap'

function Header(props) {
    return <Jumbotron><Container><header style={{ textAlign: "center" }} > <h1>Welcome to NC news, by HB</h1></header></Container></Jumbotron>
}



export default Header