import React, { Component } from "react";
import Header from './components/header'
import Home from './components/Home'
import { Router } from "@reach/router";
import './App.css';
import UserLoginForm from "./components/userLogin";
import SingleArticle from './components/singleArticle'
import Topics from './components/topics'
import TopicByArticle from './components/topicByArticle'
import AllArticles from './components/allArticles'
import ShowErrors from './components/ShowErrors'
import AddArticle from './components/addArticle'
import Users from './components/users'
import UsersArticles from './components/usersArticles'


class App extends Component {
  state = {
    userLoggedIn: 'jessjelly',
    p: 1

  }

  render() {
    const { userLoggedIn } = this.state
    return (
      <div>
        <Header />

        <UserLoginForm userLoggedIn={this.userLogin} login={userLoggedIn} />

        <Router>
          <Home path="/" />
          <AllArticles path="/articles" loggingIn={this.state.userLoggedIn} />
          <AddArticle path="/articles/newArticle" loggingIn={this.state.userLoggedIn} />
          <SingleArticle path="/articles/:article_id" loggingIn={this.state.userLoggedIn} />
          <Topics path="/topics/" loggingIn={this.state.userLoggedIn} />
          <TopicByArticle path="/topics/:topic" loggingIn={this.state.userLoggedIn} />
          <Users path="/users" />
          <UsersArticles path="/users/:username/articles" />
          <ShowErrors default path="/error" />
        </Router>

      </div>
    );
  }

  componentDidMount() {
    this.saveToStorage()

  }

  saveToStorage = () => {
    for (let userLoggedIn in this.state) {
      localStorage.setItem(userLoggedIn, JSON.stringify(this.state[userLoggedIn]))
    }
  }

  userLogin = (user) => {
    this.setState({ userLoggedIn: user })

  }


}

export default App;
