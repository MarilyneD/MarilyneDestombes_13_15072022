import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const UserNav = () => {
  const globalStoreSign = useSelector(state => state.sign) // rappeler les données du store "sign"

    return (
        <NavLink className="main-nav-item" to="/profile">
          <i className="fa fa-user-circle"></i>
          {globalStoreSign.responseProfile && globalStoreSign.responseProfile.body.firstName}
        </NavLink>
    );
};

export default UserNav;