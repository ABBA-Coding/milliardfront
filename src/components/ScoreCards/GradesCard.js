import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menber from "../../assets/images/icons/score-img.png";
import { GetElementServices } from "../../services/AxiosGenerator";

export const GradesCard = ({ link }) => {
  const [students, setStudents] = useState();
  const UserId = localStorage.getItem("userId");
  console.log(students ? students : "");

  useEffect(() => {
    GetElementServices(`student?id=${UserId}`, setStudents);
  }, [UserId]);

  let sum = 0;
  // const Prise = (prise) => {
  //   if (prise > 0) {
  //     prise = (prise / 20) * 100;
  //   }
  // };
  // console.log(sum);
  // students?.user?.scores?.map((e) =>
  //   e?.scores?.forEach((number) => {
  //     sum += number;
  //   })
  // );

  // console.log(sum);

  return (
    <>
      <div className="info__top">
        <div className="info__left">
          <div className="info__cover">
            <img className="info__img" src={Menber} alt="menber" />
          </div>
          <div className="info__wrap">
            <h4 className="info__title">Baholar</h4>
            <select className="info__select" defaultValue={""}>
              {students?.user?.scores?.map((item) => (
                <option className="info__option" value="07">
                  {item.createdAt}
                </option>
              ))}
            </select>
          </div>
        </div>
        <span className="info__count">62%</span>
      </div>
      <div className="info__down down">
        <ul className="down__list">
          {/* {students?.user?.scores?.map((item) =>
            item.skill === "COMMUNICATION" ? (
              <li className="down__item item">
                <Link className="item__link" to={link}>
                  <div className="item__left">
                    <h5 className="item__title">Muloqot qilish</h5>
                    <span className="item__lorem">Lorem</span>
                  </div>
                  <span className="item__count">
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
            item.skill === "CRITICAL_THINKING" ? (
              <li className="down__item item">
                <Link className="item__link" to={link}>
                  <div className="item__left">
                    <h5 className="item__title">Tanqidiy fikrlash</h5>
                    <span className="item__lorem">Lorem</span>
                  </div>
                  <span className="item__count">
                    <span className="visually-hidden"> {(sum = 0)}</span>
                    {item?.scores?.forEach((number) => {
                      sum += number;
                      console.log(sum);
                    })}
                    {`${(sum = (sum / 20) * 100)}%`}
                    {console.log(sum)}
                  </span>
                </Link>
              </li>
            ) : (
              ""
            )
          )}

          {students?.user?.scores?.map((item) =>
            item.skill === "PROBLEM_SOLVING" ? (
              <li className="down__item item">
                <Link className="item__link" to={link}>
                  <div className="item__left">
                    <h5 className="item__title">Muammolarni hal qilish</h5>
                    <span className="item__lorem">Lorem</span>
                  </div>
                  <span className="item__count">
                    <span className="visually-hidden"> {(sum = 0)}</span>
                    {item?.scores?.forEach((number) => {
                      sum += number;
                      console.log(sum);
                    })}
                    {`${(sum = (sum / 20) * 100)}%`}
                    {console.log(sum)}
                  </span>
                </Link>
              </li>
            ) : (
              ""
            )
          )}
          {students?.user?.scores?.map((item) =>
            item.skill === "IMPLEMENTATION" ? (
              <li className="down__item item">
                <Link className="item__link" to={link}>
                  <div className="item__left">
                    <h5 className="item__title">Yechimlarni qo'llash</h5>
                    <span className="item__lorem">Lorem</span>
                  </div>
                  <span className="item__count">
                    <span className="visually-hidden"> {(sum = 0)}</span>
                    {item?.scores?.forEach((number) => {
                      sum += number;
                      console.log(sum);
                    })}
                    {`${(sum = (sum / 20) * 100)}%`}
                    {console.log(sum)}
                  </span>
                </Link>
              </li>
            ) : (
              ""
            )
          )} */}

          {/* <li className="down__item item">
            <Link className="item__link" to={link}>
              <div className="item__left">
                <h5 className="item__title">Muloqot qilish</h5>
                <span className="item__lorem">Lorem</span>
              </div>
              <span className="item__count">20%</span>
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  );
};
