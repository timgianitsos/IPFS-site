import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import './App.css';

const HomePage = () => (
  <Home />
);

const LoginPage = () => (
  <Login />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/login" component={LoginPage}></Route>
        </div>
      </Router>
    );
  }
}

export default App;






// import React from 'react';
// import logo from './logo.svg';
// import Login from './Login.js'
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1> Gianitsos Web App!!!!! </h1>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>

//       <Login></Login>

//         <a
//           className="App-link"
//           href="http://cs.utexas.edu/~vassi"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn about Vassi, HAHA
//         </a>

//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
