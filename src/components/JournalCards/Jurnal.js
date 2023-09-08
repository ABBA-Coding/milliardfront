import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { GetElementServices } from "../../services/AxiosGenerator";
import Modal from "react-modal";
import { RentModal } from "../RentModal/RentModal";
import { useTranslation } from "react-i18next";
Modal.setAppElement("#root");

const Jurnal = () => {
  const { t } = useTranslation();
  const [addModal, setAddModal] = React.useState(false);
  const [student, SetStudent] = useState([]);
  const { id } = useParams();
  const [clock, setClock] = useState();

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
                <th>{t("table.date")}</th>
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
          <p className="section__title">{t("score.sciences.communic")}</p>
          <table>
            <thead>
              <tr>
                <th>{t("table.think")}</th>
                <th>{t("table.active")}</th>
                <th>{t("table.oral")}</th>
                <th>{t("table.audit")}</th>
                <th>{t("table.grup")}</th>
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
          <p className="section__title">{t("score.sciences.critic")}</p>
          <table>
            <thead>
              <tr>
                <th>{t("crit.evidence")}</th>
                <th>{t("crit.analysis")}</th>
                <th>{t("crit.parts")}</th>
                <th>{t("crit.creative")}</th>
                <th>{t("crit.clearly")}</th>
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
          <p className="section__title">{t("score.sciences.problem")}</p>
          <table>
            <thead>
              <tr>
                <th>{t("prob.analysis")}</th>
                <th>{t("prob.fast")}</th>
                <th>{t("prob.decision")}</th>
                <th>{t("prob.solution")}</th>
                <th>{t("prob.efficient")}</th>
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
          <p className="section__title">{t("score.sciences.solution")}</p>
          <table>
            <thead>
              <tr>
                <th>{t("solush.justified")}</th>
                <th>{t("solush.quick")}</th>
                <th>{t("solush.right")}</th>
                <th>{t("solush.adapt")}</th>
                <th>{t("solush.efficient")}</th>
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
          <p className="section__title">{t("score.sciences.stress")}</p>
          <table>
            <thead>
              <tr>
                <th>{t("stres.resistant")}</th>
                <th>{t("stres.time")}</th>
                <th>{t("stres.criticism")}</th>
                <th>{t("stres.positive")}</th>
                <th>{t("stres.feeling")}</th>
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
              {t("score.main.date")}
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
              <h3 className="second__title">{t("score.sciences.communic")}</h3>
              {student?.user?.scores?.map((e) =>
                e.skill === "COMMUNICATION" && e.createdAt === lastElement
                  ? e?.scores.forEach((number) => {
                      sum += number;
                    })
                  : ""
              )}
              <span className="second__cound">
                {`${Math.floor((sum = (sum / 20) * 100))} `}%
              </span>
            </div>
            <ul className="second__point point">
              <li className="point__item">{t("table.think")}</li>
              <li className="point__item">{t("table.active")}</li>
              <li className="point__item">{t("table.oral")}</li>
              <li className="point__item">{t("table.audit")}</li>
              <li className="point__item">{t("table.grup")}</li>
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
              <h3 className="second__title">{t("score.sciences.critic")}</h3>
              <span className="visually-hidden">{(sum = 0)}</span>
              {student?.user?.scores?.map((e) =>
                e.skill === "CRITICAL_THINKING" && e.createdAt === lastElement
                  ? e?.scores.forEach((number) => {
                      sum += number;
                    })
                  : ""
              )}
              <span className="second__cound">
                {`${Math.floor((sum = (sum / 20) * 100))} `}%
              </span>
            </div>
            <ul className="second__point point">
              <li className="point__item">{t("crit.evidence")}</li>
              <li className="point__item">{t("crit.analysis")}</li>
              <li className="point__item">{t("crit.parts")}</li>
              <li className="point__item">{t("crit.creative")}</li>
              <li className="point__item">{t("crit.clearly")}</li>
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
              <h3 className="second__title">{t("score.sciences.problem")}</h3>
              <span className="visually-hidden">{(sum = 0)}</span>
              {student?.user?.scores?.map((e) =>
                e.skill === "PROBLEM_SOLVING" && e.createdAt === lastElement
                  ? e?.scores.forEach((number) => {
                      sum += number;
                    })
                  : ""
              )}
              <span className="second__cound">
                {`${Math.floor((sum = (sum / 20) * 100))} `}%
              </span>
            </div>
            <ul className="second__point point">
              <li className="point__item">{t("prob.analysis")}</li>
              <li className="point__item">{t("prob.fast")}</li>
              <li className="point__item">{t("prob.decision")}</li>
              <li className="point__item">{t("prob.solution")}</li>
              <li className="point__item">{t("prob.efficient")}</li>
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
              <h3 className="second__title">{t("score.sciences.solution")}</h3>
              <span className="visually-hidden">{(sum = 0)}</span>
              {student?.user?.scores?.map((e) =>
                e.skill === "IMPLEMENTATION" && e.createdAt === lastElement
                  ? e?.scores.forEach((number) => {
                      sum += number;
                    })
                  : ""
              )}
              <span className="second__cound">
                {`${Math.floor((sum = (sum / 20) * 100))} `}%
              </span>
            </div>
            <ul className="second__point point">
              <li className="point__item">{t("solush.justified")}</li>
              <li className="point__item">{t("solush.quick")}</li>
              <li className="point__item">{t("solush.right")}</li>
              <li className="point__item">{t("solush.adapt")}</li>
              <li className="point__item">{t("solush.efficient")}</li>
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
              <h3 className="second__title">{t("score.sciences.stress")}</h3>
              <span className="visually-hidden">{(sum = 0)}</span>
              {student?.user?.scores?.map((e) =>
                e.skill === "STRESS_REACTIVITY" && e.createdAt === lastElement
                  ? e?.scores.forEach((number) => {
                      sum += number;
                    })
                  : ""
              )}
              <span className="second__cound">
                {`${Math.floor((sum = (sum / 20) * 100))} `}%
              </span>
            </div>
            <ul className="second__point point">
              <li className="point__item">{t("stres.resistant")}</li>
              <li className="point__item">{t("stres.time")}</li>
              <li className="point__item">{t("stres.criticism")}</li>
              <li className="point__item">{t("stres.positive")}</li>
              <li className="point__item">{t("stres.feeling")}</li>
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
          {t("table.rent")}
        </button>
      </div>
    </div>
  );
};

export default Jurnal;
