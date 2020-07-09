import React from 'react';
import logo from './logo.svg';
import './App.css';

function TestDiv() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Gianitsos Web App!!!!! </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://cs.utexas.edu/~vassi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about Vassi, HAHA
        </a>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

function App() {
    return <TestDiv/>;
};




export default App;
