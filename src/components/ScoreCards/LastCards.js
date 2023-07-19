import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Menber from "../../assets/images/icons/score-img.png";
import { GetElementServices } from "../../services/AxiosGenerator";
import useZustand from "../../context/CreateZustand";

export const LastCard = () => {
  const [students, setStudents] = useState();
  const UserId = localStorage.getItem("userId");
  const setTime = useZustand((state) => state?.setTime);
  const time = useZustand((state) => state?.time);
  console.log(students ? students : "");

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
  // console.log(dates);

  return (
    <>
      <div className="info__top">
        <div className="info__left">
          <div className="info__cover">
            <img className="info__img" src={Menber} alt="menber" />
          </div>
          <div className="info__wrap">
            <h4 className="info__title">Baholar</h4>
            <select
              className="info__select"
              defaultValue={""}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            >
              <option className="info__option" value={""}>
                Choose date
              </option>
              {dates?.map((item, index) => (
                <option className="info__option" value={item.index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        {students?.user?.scores?.map((e) =>
          e.createdAt === time
            ? e?.scores.forEach((number) => {
                sum += number;
                console.log(sum);
              })
            : ""
        )}
        <span className="info__count">
          {`${Math.floor((sum = (sum / 80) * 100))} `}%
        </span>
      </div>
      <div className="info__down down">
        <ul className="down__list">
          {students?.user?.scores?.map((item) =>
            item.skill === "COMMUNICATION" && item.createdAt === time ? (
              <li className="down__item item">
                <Link
                  className="item__link"
                  to={`lastscore/${"COMMUNICATION"}`}
                >
                  <div className="item__left">
                    <h5 className="item__title">Muloqot qilish</h5>
                    <span className="item__lorem">Lorem</span>
                  </div>
                  <span className="item__count">
                    <span className="visually-hidden"> {(sum = 0)}</span>
                    {item?.scores.forEach((number) => {
                      sum += number;
                    })}
                    {`${(sum = (sum / 20) * 100)}%`}
                  </span>
                </Link>
              </li>
            ) : (
              ""
            )
          )}

          {students?.user?.scores?.map((item) =>
            item.skill === "CRITICAL_THINKING" && item.createdAt === time ? (
              <li className="down__item item">
                <Link className="item__link" to={"lastscore/CRITICAL_THINKING"}>
                  <div className="item__left">
                    <h5 className="item__title">Tanqidiy fikrlash</h5>
                    <span className="item__lorem">Lorem</span>
                  </div>
                  <span className="item__count">
                    <span className="visually-hidden"> {(sum = 0)}</span>
                    {item?.scores?.forEach((number) => {
                      sum += number;
                    })}
                    {`${(sum = (sum / 20) * 100)}%`}
                    {/* {setTwo(sum)} */}
                  </span>
                </Link>
              </li>
            ) : (
              ""
            )
          )}

          {students?.user?.scores?.map((item) =>
            item.skill === "PROBLEM_SOLVING" && item.createdAt === time ? (
              <li className="down__item item">
                <Link className="item__link" to={"lastscore/PROBLEM_SOLVING"}>
                  <div className="item__left">
                    <h5 className="item__title">Muammolarni hal qilish</h5>
                    <span className="item__lorem">Lorem</span>
                  </div>
                  <span className="item__count">
                    <span className="visually-hidden"> {(sum = 0)}</span>
                    {item?.scores?.forEach((number) => {
                      sum += number;
                    })}
                    {`${(sum = (sum / 20) * 100)}%`}
                    {/* {console.log(sum)} */}
                  </span>
                </Link>
              </li>
            ) : (
              ""
            )
          )}
          {students?.user?.scores?.map((item) =>
            item.skill === "IMPLEMENTATION" && item.createdAt === time ? (
              <li className="down__item item">
                <Link className="item__link" to={"lastscore/IMPLEMENTATION"}>
                  <div className="item__left">
                    <h5 className="item__title">Yechimlarni qo'llash</h5>
                    <span className="item__lorem">Lorem</span>
                  </div>
                  <span className="item__count">
                    <span className="visually-hidden"> {(sum = 0)}</span>
                    {item?.scores?.forEach((number) => {
                      sum += number;
                    })}
                    {`${(sum = (sum / 20) * 100)}%`}
                    {/* {console.log(sum)} */}
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
