import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import _ from "lodash";

import Login from "./components/login.js";
import Header from "./components/header.js";
import Tasks from "./components/tasks.js";
import InstructorEdit from "./components/instructor_edit.js";
import CourseEdit from "./components/course_edit.js";

class App extends Component{
    render(){
      return (
          <BrowserRouter>
            <div>
              <Route path="" component={ Header }/>
              <Route exact path="/" component={ Login } />
              <Route path="/tasks" component={ Tasks } />
              <Route path="/instructor" component={ InstructorEdit } />
              <Route path="/course" component={ CourseEdit } />
            </div>
          </BrowserRouter>
      );
    }
}

ReactDOM.render(<App/>,document.querySelector(".app"));
