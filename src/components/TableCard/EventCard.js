import React, { useEffect, useState } from "react";
import User from "../../assets/images/icons/user.png";
import { GetElementServices } from "../../services/AxiosGenerator";

export const EventCard = () => {
  const [teacher, setTeacher] = useState();
  const [classe, setClass] = useState();

  const UserId = localStorage.getItem("userId");

  useEffect(() => {
    GetElementServices(`student?id=${UserId}`, setTeacher);
  }, [UserId]);

  useEffect(() => {
    GetElementServices(`teacher/class?id=${teacher?.user?.class_id}`, setClass);
  }, [teacher?.user?.class_id]);

  return (
    <div className="event">
      <div className="event__info info">
        <div className="info__top">
          <span className="info__img">
            <img className="info__pic" src={User} alt="Event" />
          </span>
          <div className="info__cover">
            <h4 className="info__title">{classe?.teacher?.fullname}</h4>
            <p className="info__text">
              {teacher?.user?.class?.name} Sinif Rahbari
            </p>
          </div>
        </div>
        <div className="event__menber menber">
          <div className="menber__time time">
            <div className="time__data">
              <span className="time__day">
                Any <span>Date</span>
              </span>
              <span className="time__day">
                09:00 PM IST <span>Time</span>
              </span>
              <span className="time__day">
                45 Minutes <span>Duration</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
