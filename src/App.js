import React, { Component } from "react";
import Header from './components/header'
import Articles from './components/articles'
import { Link, Router } from "@reach/router";
import './App.css';
import UserLoginForm from "./components/userLogin";
import SingleArticle from './components/singleArticle'
import Topics from './components/topics'
import TopicByArticle from './components/topicByArticle'

class App extends Component {
  state = {
    userLoggedIn: ''
  }

  render() {
    return (
      <div>
        <Header />
        <UserLoginForm />

        <h1>Navigate To:</h1>
        <Link to="/articles">Home</Link> | <Link to='/author'> Author </Link> | <Link to="/topics">Topics</Link>
        <Router>
          <Articles path="/articles" />
          <SingleArticle path="/articles/:article_id" />
          <Topics path="/topics/" />
          <TopicByArticle path="/topics/:topic" />

        </Router>

      </div>
    );
  }



}

export default App;
