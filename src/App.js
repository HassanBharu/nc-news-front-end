import React, { Component } from "react";
import Header from './components/header'
import Home from './components/Home'
import { Router } from "@reach/router";
import './App.css';
import UserLoginForm from "./components/userLogin";
import SingleArticle from './components/singleArticle'
import Topics from './components/topics'
import ArticleByTopics from './components/ArticleByTopics'
import AllArticles from './components/allArticles'
import ShowErrors from './components/ShowErrors'
import AddArticle from './components/addArticle'
import Users from './components/users'
import UsersArticles from './components/usersArticles'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends Component {
  state = {
    userLoggedIn: '',
    p: 1

  }

  render() {
    const { userLoggedIn } = this.state
    return (
      <div>
        <NavBar loggingIn={this.state.userLoggedIn} />
        <Header />
        <Router>
          <Home path="/" />
          <UserLoginForm path="/login" userLoggedIn={this.userLogin} login={userLoggedIn} />
          <AllArticles path="/articles" loggingIn={this.state.userLoggedIn} />
          <AddArticle path="/articles/newArticle" loggingIn={this.state.userLoggedIn} />
          <SingleArticle path="/articles/:article_id" loggingIn={this.state.userLoggedIn} />
          <Topics path="/topics/" loggingIn={this.state.userLoggedIn} />
          <ArticleByTopics path="/topics/:topic" loggingIn={this.state.userLoggedIn} />
          <Users path="/users" />
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
    console.log(user)
    this.setState({ userLoggedIn: user })

    const parsedUser = JSON.stringify(user)
    localStorage.setItem('userLoggedIn', parsedUser)

  }


}

export default App;
