import React, { Component } from "react";
import Header from './components/Header'
import Home from './components/Home'
import { Router } from "@reach/router";
import './App.css';
import UserLoginForm from "./components/UserLogin";
import SingleArticle from './components/SingleArticle'
import Topics from './components/Topics'
import ArticleByTopics from './components/ArticleByTopics'
import AllArticles from './components/AllArticles'
import ShowErrors from './components/ShowErrors'
import AddArticle from './components/AddArticle'
import Users from './components/Users'
import UsersArticles from './components/UsersArticles'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserProfile from './components/UserProfile'



class App extends Component {
  state = {
    userLoggedIn: '',
    p: 1

  }

  render() {
    const { userLoggedIn } = this.state
    return (
      <div>
        <Header />
        <NavBar loggingIn={this.state.userLoggedIn} />
        <Router>
          <Home path="/" />
          <UserLoginForm path="/login" userLoggedIn={this.userLogin} login={userLoggedIn} />
          <AllArticles path="/articles" loggingIn={this.state.userLoggedIn} />
          <AddArticle path="/articles/newArticle" loggingIn={this.state.userLoggedIn} />
          <SingleArticle path="/articles/:article_id" loggingIn={this.state.userLoggedIn} />
          <Topics path="/topics/" loggingIn={this.state.userLoggedIn} />
          <ArticleByTopics path="/topics/:topic" loggingIn={this.state.userLoggedIn} />
          <Users path="/users" />
          <UserProfile path="/users/:username" loggingIn={this.state.userLoggedIn} />
          <UsersArticles path="/users/:username/articles" />
          <ShowErrors default path="/error" />
        </Router>

      </div>
    );
  }



  componentDidMount() {
    if (localStorage.getItem('userLoggedIn')) {
      const userString = localStorage.getItem('userLoggedIn')
      const user = JSON.parse(userString)
      this.setState({ userLoggedIn: user })
    }

  }

  userLogin = (user) => {
    this.setState({ userLoggedIn: user })

    const parsedUser = JSON.stringify(user)
    localStorage.setItem('userLoggedIn', parsedUser)

  }


}

export default App;
