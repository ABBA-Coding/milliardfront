import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/icons/logo.svg";
import Avatar from "../../assets/images/icons/man2.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AvatarIcon, DropBtn } from "../../assets/images/img/img";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { DropHeader } from "../DropHeader/DropHeader";
import { GetElementServices } from "../../services/AxiosGenerator";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [meta, setMeta] = useState();
  useEffect(() => {
    GetElementServices(`meta`, setMeta);
  }, []);

  const handleDrop = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <button
            className="header-drop"
            onClick={handleDrop}
            aria-label="burger-button"
          >
            <DropBtn />
          </button>

          {isOpen && (
            <DropHeader
              open={isOpen}
              setOpen={setIsOpen}
              call={meta?.contact}
            />
          )}

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
                    to="/journal"
                  >
                    {t("header.nav.journal")}
                  </NavLink>
                </li>
                <li className="nav__item">
                  <Tippy animation="fade" content={`Call +998${meta?.contact}`}>
                    <a
                      className="nav__link nav__link--pad"
                      href={`tel:+998${meta?.contact}`}
                    >
                      {t("header.nav.contact")}
                    </a>
                  </Tippy>
                </li>
              </ul>
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
            </nav>

            <div className="header__avatar avatar">
              <Tippy animation="fade" content="Log Out">
                <button
                  aria-label="exit-button"
                  className="avatar__btn"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("role");
                    localStorage.removeItem("userId");
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
