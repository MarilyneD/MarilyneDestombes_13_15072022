import React from 'react';
import { NavLink } from 'react-router-dom';

const UserNav = () => {
    return (
        <NavLink className="main-nav-item" to="/profile">
          <i className="fa fa-user-circle"></i>
          Tony
        </NavLink>
    );
};

export default UserNav;