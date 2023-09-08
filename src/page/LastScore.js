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
  let firstTitle = t("score.section.freely");
  let twoTitle = t("score.section.activ");
  let thrithTitle = t("score.section.body");
  let fourTitle = t("score.section.speach");
  let fiveTitle = t("score.section.group");

  if (param === "COMMUNICATION") {
    title = t("score.sciences.communic");
    firstTitle = t("score.section.freely");
    twoTitle = t("score.section.activ");
    thrithTitle = t("score.section.body");
    fourTitle = t("score.section.speach");
    fiveTitle = t("score.section.group");
  } else if (param === "CRITICAL_THINKING") {
    title = t("score.sciences.critic");
    firstTitle = t("score.crit.logic");
    twoTitle = t("score.crit.analyz");
    thrithTitle = t("score.crit.parts");
    fourTitle = t("score.crit.think");
    fiveTitle = t("score.crit.clearly");
  } else if (param === "PROBLEM_SOLVING") {
    title = t("score.sciences.problem");
    firstTitle = t("score.resolv.depth");
    twoTitle = t("score.resolv.quickly");
    thrithTitle = t("score.resolv.decision");
    fourTitle = t("score.resolv.solution");
    fiveTitle = t("score.resolv.identifies");
  } else if (param === "IMPLEMENTATION") {
    title = t("score.sciences.solution");
    firstTitle = t("score.impruv.solutions");
    twoTitle = t("score.impruv.quick");
    thrithTitle = t("score.impruv.correctly");
    fourTitle = t("score.impruv.tailor");
    fiveTitle = t("score.impruv.applies");
  } else if (param === "STRESS_REACTIVITY") {
    title = t("score.sciences.stress");
    firstTitle = t("score.stresing.resistant");
    twoTitle = t("score.stresing.tasks");
    thrithTitle = t("score.stresing.against");
    fourTitle = t("score.stresing.times");
    fiveTitle = t("score.stresing.properly");
  }

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
                })
              : ""
          )}
          <div className="info__top">
            <h3 className="info__title">{title}</h3>
            <span className="info__coun">
              {`${Math.floor((sum = (sum / 20) * 100))} `}%
            </span>
          </div>
          <ul className="info__list list">
            <li className="list__item ">{firstTitle}</li>
            <li className="list__item ">{twoTitle}</li>
            <li className="list__item ">{thrithTitle}</li>
            <li className="list__item ">{fourTitle}</li>
            <li className="list__item ">{fiveTitle}</li>
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
