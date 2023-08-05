import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { GetElementServices } from "../services/AxiosGenerator";
import useZustand from "../context/CreateZustand";
import { useTranslation } from "react-i18next";

export const LastScore = () => {
  const { t } = useTranslation();
  const [students, setStudents] = useState();
  const { param } = useParams();
  const UserId = localStorage.getItem("userId");
  const time = useZustand((state) => state?.time);

  const dates = useMemo(() => {
    return Array.from(
      new Set(
        students?.user?.scores.map((score) => score.createdAt.substring(0, 10))
      )
    );
  }, [students?.user?.scores]);

  const lastElement = time ? time : dates[dates?.length - 1];

  let title = "";
  if (param === "COMMUNICATION") {
    title = t("score.sciences.communic");
  } else if (param === "CRITICAL_THINKING") {
    title = t("score.sciences.critic");
  } else if (param === "PROBLEM_SOLVING") {
    title = t("score.sciences.problem");
  } else if (param === "IMPLEMENTATION") {
    title = t("score.sciences.solution");
  } else if (param === "STRESS_REACTIVITY") {
    title = t("score.sciences.stress");
  }

  // console.log(students);

  useEffect(() => {
    GetElementServices(`student?id=${UserId}`, setStudents);
  }, [UserId]);

  let sum = 0;

  return (
    <div className="lastscore">
      <div className="container">
        <div className="lastscore__info info">
          {students?.user?.scores?.map((e) =>
            e.skill === param && e.createdAt === lastElement
              ? e?.scores.forEach((number) => {
                  sum += number;
                  // console.log(sum);
                })
              : ""
          )}
          <div className="info__top">
            <h3 className="info__title">{title}</h3>
            <span className="info__coun">
              {`${Math.floor((sum = (sum / 25) * 100))} `}%
            </span>
          </div>
          <ul className="info__list list">
            <li className="list__item ">{t("score.section.freely")}</li>
            <li className="list__item ">{t("score.section.activ")}</li>
            <li className="list__item ">{t("score.section.body")}</li>
            <li className="list__item ">{t("score.section.speach")}</li>
            <li className="list__item ">{t("score.section.group")}</li>
          </ul>
          <div className="info__count count">
            {students?.user?.scores?.map((e) =>
              e.skill === param && e.createdAt === lastElement
                ? e?.scores?.map((item) => (
                    <span className="list__count"> {Math.floor(item)}</span>
                  ))
                : ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
