import React from "react";
import Logo from "../../assets/images/icons/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import useZustand from "../../context/CreateZustand";

export const AdminBar = () => {
  const setRoles = useZustand((state) => state?.setRoles);
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
          Classes
        </NavLink>
      </div>
      <div className="adminbar__Links">
        {/* <button
          className={"adminbar__link adminbar__link--link"}
          onClick={() => {
            setRoles("TEACHER");
          }}
        >
          For Teachers
        </button> */}
        {/* <button
          className={"adminbar__link adminbar__link--link"}
          onClick={() => {
            setRoles("USER");
          }}
        >
          For Users
        </button> */}
      </div>
      <button
        className={"adminbar__link adminbar__link--log"}
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Log OUT
      </button>
    </div>
  );
};
