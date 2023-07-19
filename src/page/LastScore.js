import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetElementServices } from "../services/AxiosGenerator";
import useZustand from "../context/CreateZustand";

export const LastScore = () => {
  const [students, setStudents] = useState();
  const { param } = useParams();
  const UserId = localStorage.getItem("userId");
  const time = useZustand((state) => state?.time);

  let title = "";
  if (param === "COMMUNICATION") {
    title = "Muloqot qilish";
  } else if (param === "CRITICAL_THINKING") {
    title = "Tanqidiy fikrlash";
  } else if (param === "PROBLEM_SOLVING") {
    title = "Muammoni hal qilish";
  } else if (param === "IMPLEMENTATION") {
    title = "Yechimlarni qo'llash:";
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
            e.skill === param && e.createdAt === time
              ? e?.scores.forEach((number) => {
                  sum += number;
                  // console.log(sum);
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
            <li className="list__item ">Aktiv tinglaydi</li>
            <li className="list__item ">Aktiv tinglaydi</li>
            <li className="list__item ">
              Og'zaki nutqda tana harakatlaridan erkin foydalanadi
            </li>
            <li className="list__item ">Auditoriyani nutqiga jalb qiladi</li>
            <li className="list__item ">
              Jamoaviy muloqotda aktiv ishtirok etadi
            </li>
          </ul>
          <div className="info__count count">
            {students?.user?.scores?.map((e) =>
              e.skill === param && e.createdAt === time
                ? e?.scores?.map((item) => (
                    <span className="list__count"> {Math.floor(item)}%</span>
                  ))
                : ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
