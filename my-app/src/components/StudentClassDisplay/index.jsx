import React from 'react';

const StudentClassDisplay = (props) => {
  return(
    <div className="columns" style={{width:"25%"}}>
      <div className="column">
        <h5 className="title is-5 has-text-justified">בנים</h5>
        <ul>
          <li>בן 1</li>
          <li>בן 2</li>
          <li>בן 3</li>
        </ul>
      </div>
      <div className="column">
        <h5 className="title is-5 ">בנות</h5>
        <ul>
          <li>בת 1</li>
          <li>בת 2</li>
          <li>בת 3</li>
        </ul>
      </div>
    </div>
  );
};

export default StudentClassDisplay;
