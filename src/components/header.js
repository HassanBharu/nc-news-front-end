import React from 'react'
import '../index.css'

function Header(props) {
    return <header style={headerClass}>Welcome to NC news, by HB</header>
}

const headerClass = {
    background: '#333',
    color: 'white',
    fontSize: '40px',
    textAlign: 'center',
    padding: '30px'
}

export default Header