import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login.js'
import './App.css';

export default class Home extends Component {
    render() {
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
                  href="/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here to go to the LOGIN PAGE :D
                </a>
        
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
    }
}

// function Home() {
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


