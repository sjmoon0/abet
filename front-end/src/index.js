import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

import Login from "./components/login.js";
import Header from "./components/header.js";
import Tasks from "./components/tasks.js";

class App extends Component{
    render(){
      return (
        <div>
          <Header />
          {/*<Login />*/}
          <Tasks />
        </div>
      );
    }
}

ReactDOM.render(<App/>,document.querySelector(".app"));
