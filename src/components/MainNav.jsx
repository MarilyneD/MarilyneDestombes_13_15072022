import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => {
    return (
        <nav className='main-nav'>
            <NavLink className="main-nav-logo" to="/" >
             <img className='main-nav-logo-image' src="/img/argentBankLogo.png" alt="Argent Bank Logo" />
             <h1 className='sr-only'>Argent Bank</h1>
             </NavLink>


             <div>
             <NavLink className='main-nav-item' to="/signIn" >
             <i className='fa fa-user-circle'></i>
               Sign In
             </NavLink>
           
        <NavLink className="main-nav-item" to="/user">
          <i className="fa fa-user-circle"></i>
          Tony
        </NavLink>
        <NavLink className="main-nav-item" to="/">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
      </div>
       
       
       
       
        </nav>
    );
};

export default MainNav;