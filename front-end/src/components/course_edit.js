import React, { Component } from 'react';

import CourseEditDropdown from "./course_edit_dropdown.js";

import makeCorsRequest from "../api-access/course_data_grab.js";

class CourseEdit extends Component{
    constructor(props){
      super(props);
      this.state = { courses: []};
      this.courseSearch((courses) => {
        console.log(courses);
        this.setState({ courses });
      });
    }

    render(){
        return (
          <div className="container">
            <br/>
            <form>
              <h3 className="center-text">Edit Course</h3>
              <CourseEditDropdown courses={this.state.courses} />
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <div className="row">
                    <div className="col-xs-6">
                      <input className="form-control" placeholder="CourseID e.g. COSC100"/>
                    </div>
                    <div className="col-xs-6">
                      <input className="form-control" placeholder="Number of Credits"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <input className="form-control" placeholder="Course name e.g. Intro to Computer Science"/>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <p>Prerequisites (Separate with commas) e.g. COSC100 or COSC101, COSC130:</p>
                  <input className="form-control" placeholder="Prerequisites"/>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <textarea className="form-control" placeholder="Catalog Description"/>
                </div>
              </div>
            </form>
          </div>
        );
    }

    courseSearch(action){
      let data = null;
      makeCorsRequest("course",data,action);
    }
}

export default CourseEdit;
