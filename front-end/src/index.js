import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

import Login from "./components/login.js";
import Header from "./components/header.js";
import Tasks from "./components/tasks.js";
import InstructorEdit from "./components/instructor_edit.js";

class App extends Component{
    render(){
      return (
        <div>
          <Header />
          {/*<Login />*/}
          {/*<Tasks />*/}
          <InstructorEdit />
        </div>
      );
    }
}

ReactDOM.render(<App/>,document.querySelector(".app"));
