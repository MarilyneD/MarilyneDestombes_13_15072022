import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUpNav = () => {
    return (
        <NavLink className='main-nav-item' to="/signUp" >
               or Sign Up
             </NavLink>
    );
};

export default SignUpNav;