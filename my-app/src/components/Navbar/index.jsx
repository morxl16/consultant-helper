import React from 'react';

const Navbar = (props) => {
  return (
    <div className="tabs is-right">
      <ul>
        <li className="is-active"><a>הכנסת תלמידים</a></li>
        <li><a>עריכת בקשות</a></li>
        <li><a>צפייה בגרף בקשות</a></li>
        <li><a>עריכת חלוקה נוכחית</a></li>
      </ul>
    </div>

          /*

        <div style={{direction: 'ltr'}} className="navbar-end">
          <div className="navbar-item ">
            <a >
              Docs
            </a>
          </div>
          <div className="navbar-item">
            <a className="navbar-link ">
              Blog
            </a>

          </div>
          <div className="navbar-item">
            <div className="navbar-link">
              More
            </div>

          </div>

        </div>
        */

    );
};
export default Navbar;
