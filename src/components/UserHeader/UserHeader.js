import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/icons/logo.svg";
import Avatar from "../../assets/images/icons/dad.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AvatarIcon } from "../../assets/images/img/img";
import Tippy from "@tippyjs/react";

export const UserHeader = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className=".header__link" to="/">
            <img className="header__img" src={logo} alt="site logo" />
          </Link>

          <div className="heaer__wrap">
            <nav className="header__nav nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "nav__link"
                    }
                    to="/"
                  >
                    {t("header.nav.main")}
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "nav__link"
                    }
                    to="/score"
                  >
                    {t("header.nav.score")}
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "nav__link"
                    }
                    to="/table"
                  >
                    {t("header.nav.table")}
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "nav__link"
                    }
                    to="/contact"
                  >
                    {t("header.nav.contact")}
                  </NavLink>
                </li>
              </ul>
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
                <option className="nav__option" value="ru">
                  Russian
                </option>
              </select>
            </nav>

            <div className="header__avatar avatar">
              <Tippy animation="fade" content="Log Out">
                <button
                  className="avatar__btn"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login");
                  }}
                >
                  <AvatarIcon />
                </button>
              </Tippy>
              <img className="avatar__img" src={Avatar} alt="avatar" />
            </div>

            {/* <div className="header__sign sign">
              <Link className="sign__register" to="/registr">
                {t("header.nav.registr")}
              </Link>
              <Link className="sign__login" to="/login">
                {t("header.nav.sign")}
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};
