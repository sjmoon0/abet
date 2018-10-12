import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

import Login from "./components/login.js";
import Header from "./components/header.js";

class App extends Component{
    render(){
      return (
        <div>
          <Header />
          <Login />
        </div>
      );
    }
}

ReactDOM.render(<App/>,document.querySelector(".app"));
