import React from "react";
import { GradesCard } from "../components/ScoreCards/GradesCard";
import { Clock } from "../assets/images/img/img";
import Man1 from "../assets/images/icons/man1.png";
import Man2 from "../assets/images/icons/man2.png";
import Man3 from "../assets/images/icons/man13.png";
import Man4 from "../assets/images/icons/man4.png";
import Man5 from "../assets/images/icons/man5.png";
import Book1 from "../assets/images/icons/book1.png";
import Book2 from "../assets/images/icons/book2.png";
import { MiniCards } from "../components/ScoreCards/MiniCards";

export const AllScore = () => {
  return (
    <div className="social">
      <div className="container">
        <div className="social__inner inner">
          <div className="inner__left">
            <GradesCard link={"lastscore"} />
          </div>
          <div className="inner__right right">
            <h3 className="right__title">Biznesni davolash</h3>
            <span className="right__time">
              {" "}
              <Clock /> 10.30 AM - 11.30 AM
            </span>

            <ul className="right__list">
              <li className="righ__item">
                <img src={Man1} alt="member" />
              </li>
              <li className="righ__item">
                <img src={Man2} alt="member" />
              </li>
              <li className="righ__item">
                <img src={Man3} alt="member" />
              </li>
              <li className="righ__item">
                <img src={Man4} alt="member" />
              </li>
              <li className="righ__item">
                <img src={Man5} alt="member" />
              </li>
              <li className="righ__item">+99</li>
            </ul>

            <p className="right__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>

            <div className="right__file file">
              <strong className="file__title">Lesson Files</strong>
              <div className="file__cover">
                <img className="file__img" src={Book1} alt="book" />
                <img
                  className="file__img file__img--last"
                  src={Book2}
                  alt="book"
                />
              </div>
            </div>

            <div className="right__service service">
              <button className="service__downland">Download</button>
              <button className="service__downland service__downland--view">
                View
              </button>
            </div>
          </div>
        </div>
        <MiniCards />
      </div>
    </div>
  );
};
