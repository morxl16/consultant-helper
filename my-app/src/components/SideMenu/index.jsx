import React from 'react';
import {NavLink} from 'react-router-dom';
import studentClasses from '../../mocks/studentClasses';

const SideMenu = () => {
  return (
    <nav className="panel">
      <p className="panel-heading">
        כיתות
      </p>
      {
        studentClasses.map(studentClass => {
          return (
            <NavLink key={studentClass} to={`/editing/${studentClass}`} className="panel-block" activeClassName="is-active">
              <span style={{marginLeft: '5px'}} className="panel-icon">
                <i className="fa fa-book"></i>
              </span>
              {studentClass}
            </NavLink>
          );
        })
      }
    </nav>
  );
}

export default SideMenu;
