import React from "react";

const CourseEditDropdown = ({courses, onCourseSelect}) => {
  let courseItems = courses.map( (e,index) => {
    return <option key={e._id} value={index}>{e.courseID}</option>
  });

  return (
      <div className="form-group centered">
        <div className="col-xs-12 col-md-8 col-lg-6">
          <select onChange={(e)=>onCourseSelect(e.target.value)} className="form-control">
            <option defaultValue>Select Course:</option>
            <option >Add Course...</option>
            {courseItems}
          </select>
        </div>
      </div>
  );
};

export default CourseEditDropdown;
