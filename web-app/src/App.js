import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import './App.css';

const MainPage = () => (
  <Main />
);

const LoginPage = () => (
  <Login />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={MainPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
        </div>
      </Router>
    );
  }
}

export default App;