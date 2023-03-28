import React from "react";
import { NavLink } from "react-router-dom";
import "./adminmenu.css"
const AdminMenu = () => {
  return (
    <div className="admin-menu">
      <h4 className="admin-menu-title">Admin Panel</h4>
      <ul className="admin-menu-list">
        <li className="admin-menu-item">
          <NavLink
            to="/dashboard/admin/create-category"
            className="admin-menu-link"
            activeClassName="active"
          >
            Create Category
          </NavLink>
        </li>
        <li className="admin-menu-item">
          <NavLink
            to="/dashboard/admin/create-product"
            className="admin-menu-link"
            activeClassName="active"
          >
            Create Product
          </NavLink>
        </li>
        <li className="admin-menu-item">
          <NavLink
            to="/dashboard/admin/products"
            className="admin-menu-link"
            activeClassName="active"
          >
            Products
          </NavLink>
        </li>
        <li className="admin-menu-item">
          <NavLink
            to="/dashboard/admin/orders"
            className="admin-menu-link"
            activeClassName="active"
          >
            Orders
          </NavLink>
        </li>
        <li className="admin-menu-item">
          <NavLink
            to="/dashboard/admin/users"
            className="admin-menu-link"
            activeClassName="active"
          >
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;
