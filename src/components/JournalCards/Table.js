import React, { useEffect, useState } from "react";
import { ScrollerBtn } from "./ScrollerBtn";
import { ItemList } from "./ItemList";
import Std3 from "../../assets/images/icons/student3.png";
import { GetElementServices } from "../../services/AxiosGenerator";

export const Table = () => {
  const [classId, setClassId] = useState("");
  const [room, setRoom] = useState();
  const [students, setStudents] = useState();
  console.log(students);
  const StudentVal =
    students?.students || students?.users || students
      ? students?.students || students?.users || students
      : students?.students;

  // get class
  useEffect(() => {
    GetElementServices("class/all", setRoom);
  }, []);

  // get students by class
  useEffect(() => {
    GetElementServices(`students/class?id=${classId}`, setStudents);
  }, [classId]);

  // all student
  useEffect(() => {
    GetElementServices(`students`, setStudents);
  }, []);

  const Allstudents = () => {
    GetElementServices(`students`, setStudents);
  };

  return (
    <div className="tablee">
      <div className="table__inner">
        <div className="table__links scroller">
          <ScrollerBtn />
          <ScrollerBtn />
          <ScrollerBtn />
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
        <div className="table__info info">
          <select
            className="info__title"
            onChange={(e) => {
              setClassId(e.target.value);
              if (e.target.value === "") {
                Allstudents();
              }
            }}
            defaultValue={""}
          >
            <option value={""}>All Students</option>
            {room?.classes?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} sinfi
              </option>
            ))}
          </select>

          <ul className="info__list">
            {StudentVal?.map((e) => (
              <ItemList
                key={e.id}
                img={Std3}
                name={e.fullname}
                classroom={e.class?.name}
                id={e.id}
              />
            ))}
          </ul>

          <p className="info__text">
            Umumiy o’quvchilar soni {StudentVal?.length} ta
          </p>
        </div>
      </div>
    </div>
  );
};
