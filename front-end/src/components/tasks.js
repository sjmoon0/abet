import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tasks extends Component{
    render(){
        return (
          <div className="container">
            <br/>
            <div className="row">
              <div className="form-group centered">
                <div className="col-xs-12 col-md-6">
                  <Link to="/instructor">
                    <button type="button" className="btn btn-block btn-primary">
                      <i className="fa fa-user-o"></i>
                      &nbsp;
                      Edit Instructor Info
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group centered">
                <div className="col-xs-12 col-md-6">
                  <button type="button" className="btn btn-block btn-primary">
                    <i className="fa fa-book"></i>
                    &nbsp;
                    Edit Course Info
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group centered">
                <div className="col-xs-12 col-md-6">
                  <button type="button" className="btn btn-block btn-primary">
                    <i className="fa fa-crosshairs"></i>
                    &nbsp;
                    Edit Program Objectives
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group centered">
                <div className="col-xs-12 col-md-6">
                  <button type="button" className="btn btn-block btn-primary">
                    <i className="fa fa-graduation-cap"></i>
                    &nbsp;
                    Edit Student Outcomes
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group centered">
                <div className="col-xs-12 col-md-6">
                  <button type="button" className="btn btn-block btn-primary">
                    <i className="fa fa-map-signs"></i>
                    &nbsp;
                    Edit Objective to Course Mapping
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
};

export default Tasks;
