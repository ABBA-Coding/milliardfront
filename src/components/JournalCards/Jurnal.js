import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { GetElementServices } from "../../services/AxiosGenerator";
import Modal from "react-modal";
import { RentModal } from "../RentModal/RentModal";
Modal.setAppElement("#root");

const Jurnal = () => {
  const [addModal, setAddModal] = React.useState(false);
  const [student, SetStudent] = useState([]);
  const { id } = useParams();
  const [clock, setClock] = useState();

  // console.log(student);

  const customStyles = {
    content: {
      width: "700px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
      zIndex: "11",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  };

  useEffect(() => {
    GetElementServices(`student?id=${id}`, SetStudent);
  }, [id]);

  const dates = useMemo(() => {
    return Array.from(
      new Set(
        student?.user?.scores.map((score) => score.createdAt.substring(0, 10))
      )
    );
  }, [student?.user?.scores]);
  console.log(dates);

  const lastElement = clock ? clock : dates[dates?.length - 1];
  let sum = 0;
  return (
    <div className="points">
      <div className="points__inner">
        <div className="points__date">
          <table>
            <thead>
              <tr>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {dates.map((date) => (
                <tr key={date}>
                  <td>{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="points__section section">
          <p className="section__title">Muloqot qilish</p>
          <table>
            <thead>
              <tr>
                <th>Fikrlarini</th>
                <th>Aktiv</th>
                <th>Og'zaki</th>
                <th>Auditoriyani</th>
                <th>Jamoaviy</th>
              </tr>
            </thead>
            <tbody>
              {student?.user?.scores?.map((item) => (
                <tr>
                  {item.skill === "COMMUNICATION"
                    ? item?.scores?.map((e) => (
                        <td key={crypto.randomUUID()}>{e}</td>
                      ))
                    : ""}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="points__section section">
          <p className="section__title">Tanqidiy fikrlash:</p>
          <table>
            <thead>
              <tr>
                <th>Fikrlarini</th>
                <th>Aktiv</th>
                <th>Og'zaki</th>
                <th>Auditoriyani</th>
                <th>Jamoaviy</th>
              </tr>
            </thead>
            <tbody>
              {student?.user?.scores?.map((item) => (
                <tr>
                  {item.skill === "CRITICAL_THINKING"
                    ? item?.scores?.map((e) => <td>{e}</td>)
                    : ""}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="points__section section">
          <p className="section__title">Muammoni hal qilish:</p>
          <table>
            <thead>
              <tr>
                <th>Fikrlarini</th>
                <th>Aktiv</th>
                <th>Og'zaki</th>
                <th>Auditoriyani</th>
                <th>Jamoaviy</th>
              </tr>
            </thead>
            <tbody>
              {student?.user?.scores?.map((item) => (
                <tr>
                  {item.skill === "PROBLEM_SOLVING"
                    ? item?.scores?.map((e) => <td>{e}</td>)
                    : ""}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="points__section section">
          <p className="section__title">Yechimlarni qo'llash:</p>
          <table>
            <thead>
              <tr>
                <th>Fikrlarini</th>
                <th>Aktiv</th>
                <th>Og'zaki</th>
                <th>Auditoriyani</th>
                <th>Jamoaviy</th>
              </tr>
            </thead>
            <tbody>
              {student?.user?.scores?.map((item) => (
                <tr>
                  {item.skill === "IMPLEMENTATION"
                    ? item?.scores?.map((e) => <td>{e}</td>)
                    : ""}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="points__section section">
          <p className="section__title">Stressli vaziyatga munosabat:</p>
          <table>
            <thead>
              <tr>
                <th>Fikrlarini</th>
                <th>Aktiv</th>
                <th>Og'zaki</th>
                <th>Auditoriyani</th>
                <th>Jamoaviy</th>
              </tr>
            </thead>
            <tbody>
              {student?.user?.scores?.map((item) => (
                <tr>
                  {item.skill === "STRESS_REACTIVITY"
                    ? item?.scores?.map((e) => <td>{e}</td>)
                    : ""}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="points__second second">
        <div className="second__cover">
          <select
            className="second__select"
            defaultValue={""}
            onChange={(e) => {
              setClock(e.target.value);
            }}
          >
            <option className="second__option" value={""}>
              Choose date
            </option>
            {dates?.map((item, index) => (
              <option key={index} className="info__option" value={item.index}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="second__wrap">
          <div className="second__info">
            <div className="second__top">
              <h3 className="second__title">Muloqot qilish</h3>
              {student?.user?.scores?.map((e) =>
                e.skill === "COMMUNICATION" && e.createdAt === lastElement
                  ? e?.scores.forEach((number) => {
                      sum += number;
                      // console.log(number);
                    })
                  : ""
              )}
              <span className="second__cound">
                {`${Math.floor((sum = (sum / 25) * 100))} `}%
              </span>
            </div>
            <ul className="second__point point">
              <li className="point__item">Fikrlarini</li>
              <li className="point__item">Aktiv</li>
              <li className="point__item">Og’zaki</li>
              <li className="point__item">Auditoriyani</li>
              <li className="point__item">Jamoaviy</li>
            </ul>
            <ul className="second__number number">
              {student?.user?.scores?.map((item) =>
                item.skill === "COMMUNICATION" && item.createdAt === lastElement
                  ? item?.scores?.map((e) => (
                      <li className="number__item">{Math.floor(e)}</li>
                    ))
                  : ""
              )}
            </ul>
          </div>

          <div className="second__info">
            <div className="second__top">
              <h3 className="second__title">Tanqidiy fikrlash</h3>
              <span className="visually-hidden">{(sum = 0)}</span>
              {student?.user?.scores?.map((e) =>
                e.skill === "CRITICAL_THINKING" && e.createdAt === lastElement
                  ? e?.scores.forEach((number) => {
                      sum += number;
                      // console.log(number);
                    })
                  : ""
              )}
              <span className="second__cound">
                {`${Math.floor((sum = (sum / 25) * 100))} `}%
              </span>
            </div>
            <ul className="second__point point">
              <li className="point__item">Fikrlarini</li>
              <li className="point__item">Aktiv</li>
              <li className="point__item">Og’zaki</li>
              <li className="point__item">Auditoriyani</li>
              <li className="point__item">Jamoaviy</li>
            </ul>
            <ul className="second__number number">
              {student?.user?.scores?.map((item) =>
                item.skill === "CRITICAL_THINKING" &&
                item.createdAt === lastElement
                  ? item?.scores?.map((e) => (
                      <li className="number__item">{Math.floor(e)}</li>
                    ))
                  : ""
              )}
            </ul>
          </div>

          <div className="second__info">
            <div className="second__top">
              <h3 className="second__title">Muammoni hal qilish</h3>
              <span className="visually-hidden">{(sum = 0)}</span>
              {student?.user?.scores?.map((e) =>
                e.skill === "PROBLEM_SOLVING" && e.createdAt === lastElement
                  ? e?.scores.forEach((number) => {
                      sum += number;
                      // console.log(number);
                    })
                  : ""
              )}
              <span className="second__cound">
                {`${Math.floor((sum = (sum / 25) * 100))} `}%
              </span>
            </div>
            <ul className="second__point point">
              <li className="point__item">Fikrlarini</li>
              <li className="point__item">Aktiv</li>
              <li className="point__item">Og’zaki</li>
              <li className="point__item">Auditoriyani</li>
              <li className="point__item">Jamoaviy</li>
            </ul>
            <ul className="second__number number">
              {student?.user?.scores?.map((item) =>
                item.skill === "PROBLEM_SOLVING" &&
                item.createdAt === lastElement
                  ? item?.scores?.map((e) => (
                      <li className="number__item">{Math.floor(e)}</li>
                    ))
                  : ""
              )}
            </ul>
          </div>

          <div className="second__info">
            <div className="second__top">
              <h3 className="second__title">Muammoni hal qilish</h3>
              <span className="visually-hidden">{(sum = 0)}</span>
              {student?.user?.scores?.map((e) =>
                e.skill === "IMPLEMENTATION" && e.createdAt === lastElement
                  ? e?.scores.forEach((number) => {
                      sum += number;
                      // console.log(number);
                    })
                  : ""
              )}
              <span className="second__cound">
                {`${Math.floor((sum = (sum / 25) * 100))} `}%
              </span>
            </div>
            <ul className="second__point point">
              <li className="point__item">Fikrlarini</li>
              <li className="point__item">Aktiv</li>
              <li className="point__item">Og’zaki</li>
              <li className="point__item">Auditoriyani</li>
              <li className="point__item">Jamoaviy</li>
            </ul>
            <ul className="second__number number">
              {student?.user?.scores?.map((item) =>
                item.skill === "IMPLEMENTATION" &&
                item.createdAt === lastElement
                  ? item?.scores?.map((e) => (
                      <li className="number__item">{Math.floor(e)}</li>
                    ))
                  : ""
              )}
            </ul>
          </div>

          <div className="second__info">
            <div className="second__top">
              <h3 className="second__title">Muammoni hal qilish</h3>
              <span className="visually-hidden">{(sum = 0)}</span>
              {student?.user?.scores?.map((e) =>
                e.skill === "STRESS_REACTIVITY" && e.createdAt === lastElement
                  ? e?.scores.forEach((number) => {
                      sum += number;
                      // console.log(number);
                    })
                  : ""
              )}
              <span className="second__cound">
                {`${Math.floor((sum = (sum / 25) * 100))} `}%
              </span>
            </div>
            <ul className="second__point point">
              <li className="point__item">Fikrlarini</li>
              <li className="point__item">Aktiv</li>
              <li className="point__item">Og’zaki</li>
              <li className="point__item">Auditoriyani</li>
              <li className="point__item">Jamoaviy</li>
            </ul>
            <ul className="second__number number">
              {student?.user?.scores?.map((item) =>
                item.skill === "STRESS_REACTIVITY" &&
                item.createdAt === lastElement
                  ? item?.scores?.map((e) => (
                      <li className="number__item">{Math.floor(e)}</li>
                    ))
                  : ""
              )}
            </ul>
          </div>
        </div>
      </div>

      <Modal
        isOpen={addModal}
        onRequestClose={() => setAddModal(false)}
        style={customStyles}
      >
        <RentModal isOpen={setAddModal} id={id} />
      </Modal>

      <div className="points__send send">
        <button
          className="send__btn"
          onClick={() => {
            setAddModal(true);
          }}
        >
          Evaluation
        </button>
      </div>
    </div>
  );
};

export default Jurnal;
