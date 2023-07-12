import React from "react";
import { Link } from "react-router-dom";
import Menber from "../../assets/images/icons/score-img.png";

export const GradesCard = ({ link }) => {
  return (
    <>
      <div className="info__top">
        <div className="info__left">
          <div className="info__cover">
            <img className="info__img" src={Menber} alt="menber" />
          </div>
          <div className="info__wrap">
            <h4 className="info__title">Baholar</h4>
            <select className="info__select" defaultValue={""}>
              <option className="info__option" value="07">
                Bugun - 7 avg
              </option>
              <option className="info__option" value="08">
                Bugun - 8 avg
              </option>
              <option className="info__option" value="09">
                Bugun - 9 avg
              </option>
            </select>
          </div>
        </div>
        <span className="info__count">62%</span>
      </div>
      <div className="info__down down">
        <ul className="down__list">
          <li className="down__item item">
            <Link className="item__link" to={link}>
              <div className="item__left">
                <h5 className="item__title">Muloqot qilish</h5>
                <span className="item__lorem">Lorem</span>
              </div>
              <span className="item__count">20%</span>
            </Link>
          </li>

          <li className="down__item item">
            <Link className="item__link" to={link}>
              <div className="item__left">
                <h5 className="item__title">Muloqot qilish</h5>
                <span className="item__lorem">Lorem</span>
              </div>
              <span className="item__count">16%</span>
            </Link>
          </li>

          <li className="down__item item">
            <Link className="item__link" to={link}>
              <div className="item__left">
                <h5 className="item__title">Muloqot qilish</h5>
                <span className="item__lorem">Lorem</span>
              </div>
              <span className="item__count">12%</span>
            </Link>
          </li>

          <li className="down__item item">
            <Link className="item__link" to={link}>
              <div className="item__left">
                <h5 className="item__title">Muloqot qilish</h5>
                <span className="item__lorem">Lorem</span>
              </div>
              <span className="item__count">8%</span>
            </Link>
          </li>

          <li className="down__item item">
            <Link className="item__link" to={link}>
              <div className="item__left">
                <h5 className="item__title">Muloqot qilish</h5>
                <span className="item__lorem">Lorem</span>
              </div>
              <span className="item__count">8%</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
