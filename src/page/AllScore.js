import React from "react";
import { Clock, MessageDownbtn } from "../assets/images/img/img";
import { LastCard } from "../components/ScoreCards/LastCards";
import { useTranslation } from "react-i18next";

export const AllScore = () => {
  const { t } = useTranslation();
  return (
    <div className="social">
      <div className="container">
        <div className="social__inner inner">
          <div className="inner__left">
            <LastCard />
          </div>
          <div className="inner__right right">
            <h3 className="right__title">{t("score.main.bussines")}</h3>
            <span className="right__time">
              {" "}
              <Clock /> 10.30 AM - 11.30 AM
            </span>

            <p className="right__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>

            {/* <div className="right__service service">
              <button className="service__downland">Download</button>
              <button className="service__downland service__downland--view">
                View
              </button>
            </div> */}

            <a
              href="https://t.me/milliardkidz"
              target="blank"
              className="right__btn"
            >
              <MessageDownbtn />
            </a>
          </div>
        </div>
        {/* <MiniCards /> */}
      </div>
    </div>
  );
};
