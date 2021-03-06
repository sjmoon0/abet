import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component{
    render(){
        return (
          <div className="center-text container">
            <br/>
            <h1>ABET Documentation Generator</h1>
            <h2>Frostburg State University CSIT</h2>
            <div className="row">
              <div className="form-group centered">
                <div className="col-lg-6">
                  <input className="form-control" placeholder="Username"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group centered">
                <div className="col-lg-6">
                  <input type="password" className="form-control" placeholder="Password"/>
                </div>
              </div>
            </div>
            <Link to="/tasks"><button>Login</button></Link>
          </div>
        );
    }
};

export default Login;
