import React, { useMemo, useState } from "react";
import { ReytingItem } from "./ReytingItem";
import { ScrollerBtn } from "./ScrollerBtn";
import axios from "axios";

export const Reyting = () => {
  const [classes, setClasses] = useState([]);
  const [classId, setClassId] = useState("");

  // const activeClass = useMemo(() => {
  //   return classes.find((classItem) => classItem.id === classId);
  // }, [classId, classes]);

  const gold = "bronze";

  const [proba, setproba] = useState();
  // console.log(proba);
  useState(() => {
    async function getClasses() {
      const classes = await axios.get("http://localhost:5000/class/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setClasses(classes.data.classes);
      setproba(classes?.data);
    }
    getClasses();
  }, []);

  // end
  // const sum = (numbers = []) => {
  //   return numbers.reduce((previous, current) => previous + current, 0);
  // };

  // proba?.classes.forEach((klass) => {
  //   klass.students.forEach((student) => {
  //     student.scores = sum(student.scores.map((score) => sum(score.scores)));
  //   });

  //   klass.students.sort((a, b) => a.scores - b.scores);
  // });

  // proba?.classes.sort((a, b) => (a.name > b.name ? -1 : 1));

  // console.dir(proba, { depth: 4 });

  const activeClass = useMemo(() => {
    return classes.find((classItem) => classItem.id === classId);
  }, [classId, classes]);

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
          <option value={""}>Sinfni tanlang</option>
          {classes?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name} sinfi
            </option>
          ))}
        </select>

        <div className="info__first down">
          {activeClass ? (
            <p className="down__text">
              Umumiy o’quvchilar soni {activeClass?.students.length} ta
            </p>
          ) : (
            <p className="down__text">Umumiy o’quvchilar</p>
          )}

          <div className="down__cover">
            <span className="down__color">Gold</span>
            <span className="down__color">Silver</span>
            <span className="down__color">Bronze</span>
          </div>
        </div>

        <ul className="info__list">
          {activeClass
            ? activeClass?.students.map((student) => (
                <ReytingItem
                  key={student.id}
                  name={student.fullname}
                  point={student}
                  clas={gold}
                />
              ))
            : classes?.map((e) =>
                e.students?.map((item) => (
                  <ReytingItem
                    key={item.id}
                    name={item.fullname}
                    point={item}
                    clas={gold}
                  />
                ))
              )}
        </ul>
        <div className="info__down down">
          {activeClass ? (
            <p className="down__text">
              Umumiy o’quvchilar soni {activeClass?.students.length} ta
            </p>
          ) : (
            <p className="down__text">Umumiy o’quvchilar</p>
          )}

          <div className="down__cover">
            <span className="down__color">Gold</span>
            <span className="down__color">Silver</span>
            <span className="down__color">Bronze</span>
          </div>
        </div>
      </div>
    </div>
  );
};
