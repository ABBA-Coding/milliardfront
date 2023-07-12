import React from "react";
import Alisher from "../../assets/images/icons/alisher.png";
import Man1 from "../../assets/images/icons/man1.png";
import Man2 from "../../assets/images/icons/man2.png";
import Man3 from "../../assets/images/icons/man13.png";
import Man4 from "../../assets/images/icons/man4.png";
import Man5 from "../../assets/images/icons/man5.png";

export const EventCard = () => {
  return (
    <div className="event">
      <div className="event__info info">
        <div className="info__top">
          <span className="info__img">
            <img className="info__pic" src={Alisher} alt="Event" />
          </span>
          <div className="info__cover">
            <h4 className="info__title">Alisher Isaev</h4>
            <p className="info__text">
              Robokidz, Milliard va Sales Doctor asoschisi
            </p>
          </div>
        </div>
        <div className="event__menber menber">
          <strong className="menber__title">Participants</strong>
          <ul className="menber__list">
            <li className="menber__item">
              <img src={Man1} alt="menbers" />
            </li>
            <li className="menber__item">
              <img src={Man2} alt="menbers" />
            </li>
            <li className="menber__item">
              <img src={Man3} alt="menbers" />
            </li>
            <li className="menber__item">
              <img src={Man4} alt="menbers" />
            </li>
            <li className="menber__item">
              <img src={Man5} alt="menbers" />
            </li>
            <li className="menber__item">+99</li>
          </ul>

          <div className="menber__time time">
            <div className="time__data">
              <span className="time__day">
                17 May 2022 <span>Date</span>
              </span>
              <span className="time__day">
                01:00 PM IST <span>Time</span>
              </span>
              <span className="time__day">
                45 Minutes <span>Duration</span>
              </span>
            </div>
            <button className="time__btn">Qo‘shilish</button>
          </div>
        </div>
      </div>
    </div>
  );
};
