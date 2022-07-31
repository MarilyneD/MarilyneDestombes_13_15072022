import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInNav = () => {
    return (
        <NavLink className='main-nav-item' to="/signIn" >
             <i className='fa fa-user-circle'></i>
               Sign In
             </NavLink>
    );
};

export default SignInNav;