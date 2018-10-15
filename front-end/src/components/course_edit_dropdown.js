import React from "react";

const CourseEditDropdown = (props) => {
  let courseItems = props.courses.map(e => {
    return <option key={e._id} value={e._id}>{e.courseID}</option>
  });

  return (
      <div className="form-group centered">
        <div className="col-xs-12 col-md-8 col-lg-6">
          <select className="form-control">
            <option defaultValue>Select Course:</option>
            <option value="1">Add Course...</option>
            {courseItems}
          </select>
        </div>
      </div>
  );
};

export default CourseEditDropdown;
