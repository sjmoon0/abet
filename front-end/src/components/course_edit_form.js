import React from "react";

const CourseEditForm = (props) => {
  const course = props.course;
  return (
    <div>
      <div className="form-group centered">
        <div className="col-xs-12 col-md-8 col-lg-6">
          <div className="row">
            <div className="col-xs-6">
              <input className="form-control" value={course.courseID} onChange={e=>props.onCourseIDChange(e.target.value)} placeholder="CourseID e.g. COSC100"/>
            </div>
            <div className="col-xs-6">
              <input className="form-control" value={course.credits} onChange={e=>props.onCreditsChange(e.target.value)} placeholder="Number of Credits"/>
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
    </div>
  );
};

export default CourseEditForm;
