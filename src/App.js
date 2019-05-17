import React, { Component } from "react";
import Header from './components/header'
import Home from './components/Home'
import { Link, Router } from "@reach/router";
import './App.css';
import UserLoginForm from "./components/userLogin";
import SingleArticle from './components/singleArticle'
import Topics from './components/topics'
import TopicByArticle from './components/topicByArticle'
import AllArticles from './components/allArticles'
import ShowErrors from './components/ShowErrors'


class App extends Component {
  state = {
    userLoggedIn: 'jessjelly',
    sortBy: []

  }

  render() {
    const { userLoggedIn } = this.state
    return (
      <div>
        <Header />
        <UserLoginForm userLoggedIn={this.userLogin} login={userLoggedIn} />
        {/* <h1>Navigate To:</h1> */}


        {/*  <Link to="/">Home</Link> | <Link to="/topics">Topics</Link> | <Link to="/articles">All articles</Link> */}
        {/*  <ul>
          <li> </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to="/articles">All articles</Link></li>
        </ul> */}


        <Router>
          <Home path="/" />
          <AllArticles path="/articles" />
          <SingleArticle path="/articles/:article_id" loggingIn={this.state.userLoggedIn} />
          <Topics path="/topics/" loggingIn={this.state.userLoggedIn} />
          <TopicByArticle path="/topics/:topic" />
          <ShowErrors default path="/error" />
        </Router>
      </div>
    );
  }

  userLogin = (user) => {
    this.setState({ userLoggedIn: user })

  }

  sortArticlesBy = (array) => {
    this.setState({ sortBy: array })
  }


}

export default App;
