import React from 'react'
import '../index.css'

function Header(props) {
    return <header className="header" >Welcome to NC news, by HB</header>
}

const headerClass = {
    fontfamily: "Times,serif",
    background: 'orange',
    color: 'white',
    fontSize: '40px',
    textAlign: 'center',
    padding: '30px'
}

export default Header