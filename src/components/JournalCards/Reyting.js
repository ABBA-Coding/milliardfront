import React, { useMemo, useState } from "react";
import { ReytingItem } from "./ReytingItem";
import { ScrollerBtn } from "./ScrollerBtn";
import { useTranslation } from "react-i18next";

export const Reyting = () => {
  const { t, i18n } = useTranslation();
  const [classes, setClasses] = useState([]);
  const [classId, setClassId] = useState("");

  const activeClass = useMemo(() => {
    return classes.find((classItem) => classItem.id === classId);
  }, [classId, classes]);

  const gold = "bronze";

  useState(() => {
    async function getClasses() {
      const response = await fetch("https://milliardapi.itlink.uz/class/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();

      setClasses(data.classes);
    }
    getClasses();
  }, []);

  const sum = (numbers = []) => {
    return numbers.reduce((previous, current) => previous + current, 0);
  };

  const sort = (a, b) => {
    let aScore = sum(a.scores.map((score) => sum(score.scores)));
    let bScore = sum(b.scores.map((score) => sum(score.scores)));
    return bScore - aScore;
  };

  return (
    <div className="reyting">
      <div className="reyting__links">
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
      </div>
      <div className="reyting__info info">
        <select
          className="info__title"
          onChange={(e) => {
            setClassId(e.target.value);
          }}
          defaultValue={classes?.[0]?.id}
        >
          <option value={""}>{t("reyting.choose")}</option>
          {classes?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name} sinfi
            </option>
          ))}
        </select>

        <div className="info__first down">
          {activeClass ? (
            <p className="down__text">
              {t("table.total")} {activeClass?.students?.length}{" "}
              {i18n?.language === "uz" ? "nafar" : ""}
            </p>
          ) : (
            <p className="down__text">{t("reyting.general")}</p>
          )}

          <div className="down__cover">
            <span className="down__color">{t("reyting.gold")}</span>
            <span className="down__color">{t("reyting.siliver")}</span>
            <span className="down__color">{t("reyting.bronze")}</span>
          </div>
        </div>

        <ul className="info__list">
          {activeClass
            ? activeClass?.students
                .sort(sort)
                .map((student) => (
                  <ReytingItem
                    key={student.id}
                    name={student.fullname}
                    point={student}
                    clas={gold}
                  />
                ))
            : classes
                ?.flatMap((value) => {
                  return value.students;
                })
                .sort(sort)
                .map((item) => (
                  <ReytingItem
                    key={item.id}
                    name={item.fullname}
                    point={item}
                    clas={gold}
                  />
                ))}
        </ul>
        <div className="info__down down">
          {activeClass ? (
            <p className="down__text">
              <p className="down__text">
                {t("table.total")} {activeClass?.students?.length}{" "}
                {i18n?.language === "uz" ? "nafar" : ""}
              </p>
            </p>
          ) : (
            <p className="down__text">{t("reyting.general")}</p>
          )}

          <div className="down__cover">
            <span className="down__color">{t("reyting.gold")}</span>
            <span className="down__color">{t("reyting.silver")}</span>
            <span className="down__color">{t("reyting.bronze")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
