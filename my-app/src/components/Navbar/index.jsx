import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import './navbar.css';

const Navbar = (props) => {
  return (
    <div className="tabs">
      <ul>
        <NavLink className="navbar-item is-tab" activeClassName="is-active" to="/students" >הכנסת תלמידים</NavLink>
        <NavLink className="navbar-item is-tab" activeClassName="is-active" to="/requests" >עריכת בקשות</NavLink>
        <NavLink className="navbar-item is-tab" activeClassName="is-active" to="/graph" >צפייה בגרף בקשות</NavLink>
        <NavLink className="navbar-item is-tab" activeClassName="is-active" to="/editing" >עריכת חלוקה נוכחית</NavLink>
      </ul>
    </div>
  );
};
export default Navbar;
