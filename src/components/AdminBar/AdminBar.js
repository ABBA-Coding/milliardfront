import React from "react";
import Logo from "../../assets/images/icons/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";

export const AdminBar = () => {
  const navigate = useNavigate();
  return (
    <div className="adminbar">
      <img className="adminbar__img" src={Logo} alt="logo" />

      <div className="adminbar__list">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "adminbar__link")}
          to="/"
        >
          Admins
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "adminbar__link")}
          to="/class"
        >
          Teachers
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "adminbar__link")}
          to="/student"
        >
          Students
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "adminbar__link")}
          to="/classes"
        >
          Classes
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "adminbar__link")}
          to="/settings"
        >
          Settings
        </NavLink>
      </div>
      <div className="adminbar__Links"></div>
      <button
        className={"adminbar__link adminbar__link--log"}
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Log out
      </button>
    </div>
  );
};
