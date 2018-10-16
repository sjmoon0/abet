import React, { Component } from 'react';

import CourseEditDropdown from "./course_edit_dropdown.js";
import CourseEditForm from "./course_edit_form.js";

import { makeCorsGETRequest } from "../api-access/course_data_grab.js";

class CourseEdit extends Component{
    constructor(props){
      super(props);
      this.state = {
        courses: [],
        selectedCourse: null
      };
      this.courseSearch((courses) => {
        console.log(courses);
        this.setState({courses});
      });
    }

    render(){
        return (
          <div className="container">
            <br/>
            <form>
              <h3 className="center-text">Edit Course</h3>
              <CourseEditDropdown
                onCourseSelect={(index) => this.setState({selectedCourse:this.state.courses[index]})}
                courses={this.state.courses} />
                {this.state.selectedCourse ?
                  <CourseEditForm
                  onCourseIDChange={ value => this.setState((prevState) => ({
                    ...prevState.courses,
                    courseID:value
                  }))}
                  course={this.state.selectedCourse}/> : null}
            </form>
          </div>
        );
    }

    courseSearch(action){
      let data = null;
      makeCorsGETRequest("course",data,action);
    }
}

export default CourseEdit;
