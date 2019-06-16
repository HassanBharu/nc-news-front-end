import React from 'react'
import '../index.css'
import { Jumbotron, Container } from 'react-bootstrap'

function Header(props) {
    return <Jumbotron style={{ backgroundColor: 'lightgrey', }}><Container><header style={{ textAlign: "center" }} > <h1 style={{ fontWeight: 'bold' }}>Welcome To <span style={{ color: 'darkblue' }}>NorthCoders News</span>  </h1><p><h1>By Hassan</h1></p></header></Container></Jumbotron>
}



export default Header