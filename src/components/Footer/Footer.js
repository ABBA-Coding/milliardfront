import { Link } from "react-router-dom";
import logo from "../../assets/images/icons/logo.svg";
import {
  FacebookIcon,
  InstagramIcon,
  MessageIcon,
} from "../../assets/images/img/img";
import { useTranslation } from "react-i18next";
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__top top">
            <div className="top__left left">
              <Link className="left__link" to="/main">
                <img className="left__img" src={logo} alt="site logo" />
              </Link>
              <p className="left__text">
                Milliard Kidz - bolalar va o'smirlar uchun birinchi innovatsion
                biznes maktab
              </p>
              <ul className="left__list">
                <li className="left__item">
                  <a
                    className="left__icon"
                    href="https://www.facebook.com/Milliardkidz"
                    target="blank"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li className="left__item">
                  <a
                    className="left__icon"
                    href="https://www.instagram.com/milliardkidz/?igshid=YzcxN2Q2NzY0OA%3D%3D"
                    target="blank"
                  >
                    <InstagramIcon />
                  </a>
                </li>
                <li className="left__item">
                  <a
                    className="left__icon"
                    href="https://t.me/milliardkidz"
                    target="blank"
                  >
                    <MessageIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div className="top__right right">
              <div className="right__cover">
                <strong className="right__title ">{t("footer.main")}</strong>
                <ul className="right__list">
                  {/* <li className="right__item">
                    <a className="right__link" href="#/">
                      {t("footer.accaunt")}
                    </a>
                  </li> */}
                  <li className="right__item">
                    <Link className="right__link" to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="right__cover">
                <strong className="right__title">{t("footer.contact")}</strong>
                <ul className="right__list">
                  <li className="right__item">
                    <a className="right__link" href="tel:+998952503220">
                      +998952503220
                    </a>
                  </li>
                  <li className="right__item">
                    <a className="right__link" href="#/">
                      Returns & Refunds
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer__down down">
            <p className="down__text">© 2023 Abba Marketing</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
