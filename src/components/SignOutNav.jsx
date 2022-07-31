import React from 'react';
import { NavLink } from 'react-router-dom';

const SignOutNav = () => {
    return (
        <NavLink className="main-nav-item" to="/">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
    );
};

export default SignOutNav;