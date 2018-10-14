import React, { Component } from 'react';

class CourseEdit extends Component{
    render(){
        return (
          <div className="container">
            <br/>
            <form>
              <h3 className="center-text">Edit Course</h3>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <select className="form-control">
                    <option defaultValue>Select Course:</option>
                    <option value="1">Add Course...</option>
                    <option value="2">COSC100</option>
                  </select>
                </div>
              </div>
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
};

export default CourseEdit;
