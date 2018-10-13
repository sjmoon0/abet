import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return (
          <nav className="navbar-light bg-light nav-color navbar-static-top navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link to="/tasks" className="navbar-brand">ABET Home</Link>
              </div>
              <ul className="nav navbar-nav navbar-right header-stick-right">
                <li className="nav-item ">
                  <Link to="/instructor" className="nav-link">username</Link>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
};

export default Header;
