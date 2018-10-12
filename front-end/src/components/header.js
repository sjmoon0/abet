import React, { Component } from 'react';

class Header extends Component{
    render(){
        return (
          <nav className="navbar-light bg-light nav-color navbar-static-top navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">ABET Home</a>
              </div>
              <ul className="nav navbar-nav navbar-right header-stick-right">
                <li className="nav-item ">
                  <a href="#" className="nav-link ml-100"><span></span>username</a>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
};

export default Header;
