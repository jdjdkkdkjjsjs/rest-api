import React from 'react';
import { NavLink } from 'react-router-dom';
import "./userMenu.css"
const UserMenu = () => {
  return (
    <div>
      <div className='text-center'>
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">
            <i className="bi bi-person"></i> Profile
          </NavLink>
          <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">
            <i className="bi bi-cart"></i> Orders
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default UserMenu;
