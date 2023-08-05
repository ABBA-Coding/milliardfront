import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Menber from "../../assets/images/icons/score-img.png";
import { GetElementServices } from "../../services/AxiosGenerator";
import useZustand from "../../context/CreateZustand";
import { useTranslation } from "react-i18next";

export const GradesCard = () => {
  const { t } = useTranslation();
  const [clock, setClock] = useState();
  const [students, setStudents] = useState();
  const UserId = localStorage.getItem("userId");
  const setTime = useZustand((state) => state?.setTime);

  useEffect(() => {
    GetElementServices(`student?id=${UserId}`, setStudents);
  }, [UserId]);

  let sum = 0;

  const dates = useMemo(() => {
    return Array.from(
      new Set(
        students?.user?.scores.map((score) => score.createdAt.substring(0, 10))
      )
    );
  }, [students?.user?.scores]);

  const lastElement = clock ? clock : dates[dates?.length - 1];

  return (
    <>
      <div className="info__top">
        <div className="info__left">
          <div className="info__cover">
            <img className="info__img" src={Menber} alt="menber" />
          </div>
          <div className="info__wrap">
            <h4 className="info__title">{t("score.main.grades")}</h4>
            <select
              className="info__select"
              defaultValue={""}
              onChange={(e) => {
                setClock(e.target.value);
                setTime(e.target.value);
              }}
            >
              <option className="info__option" value={""}>
                {t("score.main.date")}
              </option>
              {dates?.map((item, index) => (
                <option key={index} className="info__option" value={item.index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        {students?.user?.scores?.map((e) =>
          e.createdAt === lastElement
            ? e?.scores.forEach((number) => {
                sum += number;
                // console.log(sum);
              })
            : ""
        )}
        <span className="info__count">
          {`${Math.floor((sum = (sum / 125) * 100))} `}%
        </span>
      </div>
      <div className="info__down down">
        <ul className="down__list">
          {students?.user?.scores?.map((item, index) =>
            item.skill === "COMMUNICATION" && item.createdAt === lastElement ? (
              <li key={index} className="down__item item">
                <Link className="item__link" to={`allscore`}>
                  <div className="item__left">
                    <h5 className="item__title">
                      {t("score.sciences.communic")}
                    </h5>
                  </div>
                  <span className="item__count">
                    <span className="visually-hidden"> {(sum = 0)}</span>
                    {item?.scores.forEach((number) => {
                      sum += number;
                    })}
                    {`${(sum = (sum / 25) * 100)}%`}
                  </span>
                </Link>
              </li>
            ) : (
              ""
            )
          )}

          {students?.user?.scores?.map((item, index) =>
            item.skill === "CRITICAL_THINKING" &&
            item.createdAt === lastElement ? (
              <li key={index} className="down__item item">
                <Link className="item__link" to={"allscore"}>
                  <div className="item__left">
                    <h5 className="item__title">
                      {t("score.sciences.critic")}
                    </h5>
                  </div>
                  <span className="item__count">
                    <span className="visually-hidden"> {(sum = 0)}</span>
                    {item?.scores?.forEach((number) => {
                      sum += number;
                    })}
                    {`${(sum = (sum / 25) * 100)}%`}
                  </span>
                </Link>
              </li>
            ) : (
              ""
            )
          )}

          {students?.user?.scores?.map((item, index) =>
            item.skill === "PROBLEM_SOLVING" &&
            item.createdAt === lastElement ? (
              <li key={index} className="down__item item">
                <Link className="item__link" to={"allscore"}>
                  <div className="item__left">
                    <h5 className="item__title">
                      {t("score.sciences.problem")}
                    </h5>
                  </div>
                  <span className="item__count">
                    <span className="visually-hidden"> {(sum = 0)}</span>
                    {item?.scores?.forEach((number) => {
                      sum += number;
                    })}
                    {`${(sum = (sum / 25) * 100)}%`}
                  </span>
                </Link>
              </li>
            ) : (
              ""
            )
          )}
          {students?.user?.scores?.map((item, index) =>
            item.skill === "IMPLEMENTATION" &&
            item.createdAt === lastElement ? (
              <li key={index} className="down__item item">
                <Link className="item__link" to={"allscore"}>
                  <div className="item__left">
                    <h5 className="item__title">
                      {t("score.sciences.solution")}
                    </h5>
                  </div>
                  <span className="item__count">
                    <span className="visually-hidden"> {(sum = 0)}</span>
                    {item?.scores?.forEach((number) => {
                      sum += number;
                    })}
                    {`${(sum = (sum / 25) * 100)}%`}
                  </span>
                </Link>
              </li>
            ) : (
              ""
            )
          )}

          {students?.user?.scores?.map((item, index) =>
            item.skill === "STRESS_REACTIVITY" &&
            item.createdAt === lastElement ? (
              <li key={index} className="down__item item">
                <Link className="item__link" to={"allscore"}>
                  <div className="item__left">
                    <h5 className="item__title">
                      {t("score.sciences.stress")}
                    </h5>
                  </div>
                  <span className="item__count">
                    <span className="visually-hidden"> {(sum = 0)}</span>
                    {item?.scores?.forEach((number) => {
                      sum += number;
                    })}
                    {`${(sum = (sum / 25) * 100)}%`}
                  </span>
                </Link>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </>
  );
};
