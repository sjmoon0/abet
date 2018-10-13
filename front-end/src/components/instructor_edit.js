import React, { Component } from 'react';

class InstructorEdit extends Component{
    render(){
        return (
          <div className="container">
            <br/>
            <form>
              <h3 className="center-text">General</h3>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <select className="form-control">
                    <option defaultValue>Title:</option>
                    <option value="1">Dr.</option>
                    <option value="2">Mr.</option>
                    <option value="3">Mrs.</option>
                    <option value="4">Ms.</option>
                  </select>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <input className="form-control" placeholder="Name"/>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <div className="row">
                    <div className="center-text col-xs-3">
                      <label>Date Hired:</label>
                    </div>
                    <div className="col-xs-3">
                      <input className="form-control" placeholder="MM"/>
                    </div>
                    <div className="col-xs-1 date-separator-text">/</div>
                    <div className="col-xs-4">
                      <input className="form-control" placeholder="YYYY"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <select className="form-control">
                    <option defaultValue>Position:</option>
                    <option value="1">Professor</option>
                    <option value="2">Assistant Professor</option>
                    <option value="3">Lecturer</option>
                    <option value="4">Adjunct</option>
                    <option value="5">Instructor</option>
                  </select>
                </div>
              </div>

              <hr/>

              <h3 className="center-text">Education</h3>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <input className="form-control" placeholder="Institution"/>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <input className="form-control" placeholder="Degree"/>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <input className="form-control" placeholder="Field"/>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <div className="row">
                    <div className="center-text col-xs-3">
                      <label>Date Started:</label>
                    </div>
                    <div className="col-xs-3">
                      <input className="form-control" placeholder="MM"/>
                    </div>
                    <div className="col-xs-1 date-separator-text">/</div>
                    <div className="col-xs-4">
                      <input className="form-control" placeholder="YYYY"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <div className="row">
                    <div className="center-text col-xs-3">
                      <label>Date Graduated:</label>
                    </div>
                    <div className="col-xs-3">
                      <input className="form-control" placeholder="MM"/>
                    </div>
                    <div className="col-xs-1 date-separator-text">/</div>
                    <div className="col-xs-4">
                      <input className="form-control" placeholder="YYYY"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-6">
                  <button type="button" className="btn btn-block btn-primary">
                    Add Education
                    &nbsp;
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>

              <hr/>

              <h3 className="center-text">Academic Work Experience</h3>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <input className="form-control" placeholder="Institution"/>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <input className="form-control" placeholder="Position"/>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <div className="row">
                    <div className="center-text col-xs-3">
                      <label>Date Started:</label>
                    </div>
                    <div className="col-xs-3">
                      <input className="form-control" placeholder="MM"/>
                    </div>
                    <div className="col-xs-1 date-separator-text">/</div>
                    <div className="col-xs-4">
                      <input className="form-control" placeholder="YYYY"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <div className="row">
                    <div className="center-text col-xs-3">
                      <label>Date Ended:</label>
                    </div>
                    <div className="col-xs-3">
                      <input className="form-control" placeholder="MM"/>
                    </div>
                    <div className="col-xs-1 date-separator-text">/</div>
                    <div className="col-xs-4">
                      <input className="form-control" placeholder="YYYY"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-6">
                  <button type="button" className="btn btn-block btn-primary">
                    Add Academic Work
                    &nbsp;
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>

              <hr/>

              <h3 className="center-text">Non-Academic Work Experience</h3>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <input className="form-control" placeholder="Company"/>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <input className="form-control" placeholder="Position"/>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <div className="row">
                    <div className="center-text col-xs-3">
                      <label>Date Started:</label>
                    </div>
                    <div className="col-xs-3">
                      <input className="form-control" placeholder="MM"/>
                    </div>
                    <div className="col-xs-1 date-separator-text">/</div>
                    <div className="col-xs-4">
                      <input className="form-control" placeholder="YYYY"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <div className="row">
                    <div className="center-text col-xs-3">
                      <label>Date Ended:</label>
                    </div>
                    <div className="col-xs-3">
                      <input className="form-control" placeholder="MM"/>
                    </div>
                    <div className="col-xs-1 date-separator-text">/</div>
                    <div className="col-xs-4">
                      <input className="form-control" placeholder="YYYY"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-6">
                  <button type="button" className="btn btn-block btn-primary">
                    Add Non-Academic Work
                    &nbsp;
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>

              <hr/>

              <h3 className="center-text">Publications</h3>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <input className="form-control" placeholder="Title"/>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <input className="form-control" placeholder="Co-authors"/>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <input className="form-control" placeholder="Journal"/>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <div className="row">
                    <div className="center-text col-xs-3">
                      <label>Date Published:</label>
                    </div>
                    <div className="col-xs-3">
                      <input className="form-control" placeholder="MM"/>
                    </div>
                    <div className="col-xs-1 date-separator-text">/</div>
                    <div className="col-xs-4">
                      <input className="form-control" placeholder="YYYY"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-6">
                  <button type="button" className="btn btn-block btn-primary">
                    Add Publication
                    &nbsp;
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>

              <hr/>

              <h3 className="center-text">Awards</h3>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <input className="form-control" placeholder="Title"/>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-8 col-lg-6">
                  <div className="row">
                    <div className="center-text col-xs-3">
                      <label>Date Awarded:</label>
                    </div>
                    <div className="col-xs-3">
                      <input className="form-control" placeholder="MM"/>
                    </div>
                    <div className="col-xs-1 date-separator-text">/</div>
                    <div className="col-xs-4">
                      <input className="form-control" placeholder="YYYY"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group centered">
                <div className="col-xs-12 col-md-6">
                  <button type="button" className="btn btn-block btn-primary">
                    Add Award
                    &nbsp;
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
    }
};

export default InstructorEdit;
