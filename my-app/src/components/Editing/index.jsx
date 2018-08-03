import React from 'react';
import SideMenu from '../SideMenu';
import StudentClassDisplay from '../StudentClassDisplay';

const Editing = (props) => {
  return (
    <div className="columns">
      <div className='column is-2 is-pulled-right' style={{display: 'inline-block'}}>
        <SideMenu />
      </div>
      <div className="column" style={{marginRight: '25%'}}>
        <StudentClassDisplay />
      </div>
    </div>
  );
}

export default Editing;
