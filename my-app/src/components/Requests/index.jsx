import React from 'react';
import students from '../../mocks/students';
import StudentCard from '../StudentCard';

const Requests = (props) => {
  return (
    <div style={{margin:'0 5%'}}>
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <div className="field has-addons">
              <p className="control">
                <input className="input" type="text" placeholder="הזן בית ספר" />
              </p>
              <p className="control">
                <button className="button">
                  הצג
                </button>
              </p>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <span>הוזנו בקשות ל-</span>
        <strong>{20}</strong>
        <span> תלמידים </span>
      </div>
      <br />
      <div className="columns" style={{display:'flex', flexWrap:'wrap'}}>
        {
          students.map(student => {
            return (
              <div key={student.name} className="column is-2">
                <StudentCard name={student.name} friends={student.friends} gender={student.gender}/>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Requests;
