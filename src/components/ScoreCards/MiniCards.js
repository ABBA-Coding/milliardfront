import React from "react";
import Person1 from "../../assets/images/icons/man1.png";
import Person2 from "../../assets/images/icons/man2.png";
import Euman from "../../assets/images/icons/wuman.png";
import { MessageDownbtn } from "../../assets/images/img/img";

export const MiniCards = () => {
  return (
    <div className="minicard">
      <div className="minicard__top top">
        <div className="top__left left">
          <h3 className="left__title">Students Emotions</h3>
          <ul className="left__list">
            <li className="left__item">
              55 <button className="left__btn left__btn--laugh"></button>
            </li>
            <li className="left__item">
              05 <button className="left__btn left__btn--wow"></button>
            </li>

            <li className="left__item">
              02 <button className="left__btn left__btn--sad"></button>
            </li>
            <li className="left__item">
              00 <button className="left__btn left__btn--angry"></button>
            </li>
          </ul>
        </div>

        <div className="top__middle middle">
          <div className="middle__left">
            <span className="middle__member">Attendance</span>
            <span className="middle__count">48</span>
            <span className="middle__member middle__member--second">
              53 People in total
            </span>
          </div>
          <div className="middle__right">
            <span className="middle__absence">Absence</span>
            <div className="middle__icons">
              <div className="middle__cover">
                <img className="middle__img" src={Person1} alt="person" />
              </div>
              <div className="middle__cover">
                <img className="middle__img" src={Person2} alt="person" />
              </div>
              <div className="middle__cover">3+</div>
            </div>
          </div>
        </div>

        <div className="top__right right">
          <div className="right__info">
            <h4 className="right__title">Home Work</h4>
            <span className="right__text">Family Tradition</span>
            <span className="right__text right__text--down">
              12 Pages, 45 Minutes
            </span>
            <sapn className="right__light"></sapn>
          </div>
          <div className="right__cover">
            <img className="right__img" src={Euman} alt="template" />
          </div>
        </div>
      </div>

      <div className="minicard__down down">
        <div className="down__inner">
          <div className="down__card down__card--prev card">
            <div className="card__left">
              <strong className="card__titie">Test</strong>
              <span className="card__status">Status : Passed</span>
              <span className="card__text">Computer Science</span>
            </div>
            <span className="card__cound">80%</span>
          </div>

          <div className="down__card down__card--next card">
            <div className="card__left">
              <strong className="card__titie">Test</strong>
              <span className="card__status card__status--filed">
                Status : Failed
              </span>
              <span className="card__text">Chemistry</span>
            </div>
            <span className="card__cound">30%</span>
          </div>
          <button className="down__btn">
            <MessageDownbtn />
          </button>
        </div>
      </div>
    </div>
  );
};
