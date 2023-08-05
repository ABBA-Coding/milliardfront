import Tippy from "@tippyjs/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink, Navigate } from "react-router-dom";
import { AvatarIcon } from "../../assets/images/img/img";

export const UserDrop = ({ open, setOpen, call }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="header__other nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "nav__link")}
            to="/"
          >
            {t("header.nav.main")}
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "nav__link")}
            to="/score"
          >
            {t("header.nav.score")}
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "nav__link")}
            to="/table"
          >
            {t("header.nav.table")}
          </NavLink>
        </li>
        <li className="nav__item">
          <Tippy animation="fade" content={call}>
            <a className="nav__link nav__link--pad" href={`tel:+998${call}`}>
              {t("header.nav.contact")}
            </a>
          </Tippy>
        </li>
      </ul>
      <div className="nav__cover">
        <Tippy animation="fade" content="languages">
          <select
            className="nav__select"
            defaultValue={i18n.language}
            onChange={(evt) => {
              i18n.changeLanguage(evt.target.value);
              localStorage.setItem("lang", evt.target.value);
            }}
          >
            <option className="nav__option" value="en">
              English
            </option>
            <option className="nav__option" value="uz">
              Uzbek
            </option>
          </select>
        </Tippy>
        <Tippy animation="fade" content="Log Out">
          <button
            aria-label="exit-button"
            className="avatar__btn"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("role");
              localStorage.removeItem("userId");
              Navigate("/login");
            }}
          >
            <AvatarIcon />
          </button>
        </Tippy>
      </div>
    </div>
  );
};
