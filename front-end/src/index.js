import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

import Login from "./components/login.js";

class App extends Component{
    render(){
      return (
        <Login />
      );
    }
}

ReactDOM.render(<App/>,document.querySelector(".app"));
