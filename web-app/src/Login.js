import React, { Component } from 'react';

// This is the login page
export default class Login extends Component{

    render() {
        return (
          <div className='Log-in'>
            <h1>Welcome to Facebook :0</h1>
            <h2>Type Your Username and Password Here:</h2>
            <form action="">
              <div className='form-group'>
                <input type="text" className='form-control' placeholder='Username'/>
              </div>
              <div className='form-group'>
                <input type="password" className='form-control' placeholder='Password'/>
              </div>
              <button type="submit" className='btn btn-primary right-btn'>Login</button>
            </form>
          </div>
          );
    }

}


