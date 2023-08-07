import { useFormik } from "formik";
import axios from "axios";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export const RentModal = ({ isOpen, id }) => {
  const { t } = useTranslation();
  const token = localStorage.getItem("token");
  const dateRef = useRef();
  const selectValue = useRef();
  const oneValue = useRef();
  const twoValue = useRef();
  const threeValue = useRef();
  const fourValue = useRef();
  const fiveValue = useRef();
  const ctOne = useRef();
  const ctTwo = useRef();
  const ctThree = useRef();
  const ctFour = useRef();
  const ctFive = useRef();
  const psOne = useRef();
  const psTwo = useRef();
  const psThree = useRef();
  const psFour = useRef();
  const psFive = useRef();
  const impOne = useRef();
  const impTwo = useRef();
  const impThree = useRef();
  const impFour = useRef();
  const impFive = useRef();
  const srOne = useRef();
  const srTwo = useRef();
  const srThree = useRef();
  const srFour = useRef();
  const srFive = useRef();
  const Arr = [];

  const { handleChange, handleSubmit } = useFormik({
    initialValues: {
      scores: {
        COMMUNICATION: [],
        CRITICAL_THINKING: [],
        PROBLEM_SOLVING: [],
        IMPLEMENTATION: [],
        STRESS_REACTIVITY: [],
      },
    },
    onSubmit: async () => {
      Arr.push(
        {
          skill: "COMMUNICATION",
          scores: [
            Number(oneValue?.current?.value),
            Number(twoValue?.current?.value),
            Number(threeValue?.current?.value),
            Number(fourValue?.current?.value),
            Number(fiveValue?.current?.value),
          ],
          createdAt: dateRef?.current?.value,
          userId: id,
        },
        {
          skill: "CRITICAL_THINKING",
          scores: [
            Number(ctOne.current?.value),
            Number(ctTwo.current?.value),
            Number(ctThree.current?.value),
            Number(ctFour.current?.value),
            Number(ctFive.current?.value),
          ],
          createdAt: dateRef?.current?.value,
          userId: id,
        },
        {
          skill: "PROBLEM_SOLVING",
          scores: [
            Number(psOne.current?.value),
            Number(psTwo.current?.value),
            Number(psThree.current?.value),
            Number(psFour.current?.value),
            Number(psFive.current?.value),
          ],
          createdAt: dateRef?.current?.value,
          userId: id,
        },
        {
          skill: "IMPLEMENTATION",
          scores: [
            Number(impOne.current?.value),
            Number(impTwo.current?.value),
            Number(impThree.current?.value),
            Number(impFour.current?.value),
            Number(impFive.current?.value),
          ],
          createdAt: dateRef?.current?.value,
          userId: id,
        },
        {
          skill: "STRESS_REACTIVITY",
          scores: [
            Number(srOne.current?.value),
            Number(srTwo.current?.value),
            Number(srThree.current?.value),
            Number(srFour.current?.value),
            Number(srFive.current?.value),
          ],
          createdAt: dateRef?.current?.value,
          userId: id,
        }
      );
      try {
        const scoresResponse = await axios.post(
          `https://milliardapi.itlink.uz/student/mark?id=${id}`,
          Arr,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(scoresResponse);
        if (scoresResponse.status === 200) {
          isOpen(false);
          window.location.reload(false);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="evalution">
      <form className="login__form agent" onSubmit={handleSubmit}>
        <div className="form-group">
          <label
            style={{
              marginBottom: "12px",
              textAlign: "center",
              display: "block",
              fontSize: "16px",
            }}
            htmlFor="datepicker"
          >
            {t("score.main.date")}
          </label>
          <input
            className="custom-date-input "
            style={{
              marginBottom: "15px",
            }}
            ref={dateRef}
            type="date"
            placeholder=""
            required
          />
        </div>

        {/* communication */}
        <div className="form-group">
          <label
            style={{
              marginBottom: "10px",
              textAlign: "center",
              display: "block",
            }}
            htmlFor="username"
          >
            {t("score.sciences.communic")}
          </label>
          <select
            name="class_id"
            style={{ display: "none" }}
            ref={selectValue}
            className="login__input login__input--select"
            disabled
            defaultValue={"COMMUNICATION"}
            onChange={handleChange}
          >
            <option className="login__option" value="">
              choose a subject
            </option>
            <option className="login__option" value="COMMUNICATION">
              Muloqot qilish
            </option>
            <option className="login__option" value="CRITICAL_THINKING">
              Tanqidiy fikrlash:
            </option>
            <option className="login__option" value="PROBLEM_SOLVING">
              Muammoni hal qilish:
            </option>
            <option className="login__option" value="IMPLEMENTATION">
              Yechimlarni qo'llash:
            </option>
          </select>
        </div>

        <div className="form-group">
          <table className="log__table">
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
              <tr>
                <td>
                  <input
                    name="one"
                    ref={oneValue}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    ref={twoValue}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    ref={threeValue}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    ref={fourValue}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    ref={fiveValue}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* critical thinking */}

        <div className="form-group">
          <label
            style={{
              textAlign: "center",
              display: "block",
            }}
            htmlFor="username"
          >
            {t("score.sciences.critic")}
          </label>
          <select
            name="class_id"
            style={{ display: "none" }}
            ref={selectValue}
            className="login__input login__input--select"
            disabled
            defaultValue={"CRITICAL_THINKING"}
            onChange={handleChange}
          ></select>
        </div>

        <div className="form-group">
          <table className="log__table">
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
              <tr>
                <td>
                  <input
                    name={"scores.CRITICAL_THINKING"}
                    ref={ctOne}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    name={"scores.CRITICAL_THINKING"}
                    ref={ctTwo}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    name={"scores.CRITICAL_THINKING"}
                    ref={ctThree}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    name={"scores.CRITICAL_THINKING"}
                    ref={ctFour}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    name={"scores.CRITICAL_THINKING"}
                    ref={ctFive}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* problem solving */}

        <div className="form-group">
          <label
            style={{
              textAlign: "center",
              display: "block",
            }}
            htmlFor="username"
          >
            {t("score.sciences.problem")}
          </label>
          <select
            name="class_id"
            style={{ display: "none" }}
            ref={selectValue}
            className="login__input login__input--select"
            disabled
            defaultValue={"PROBLEM_SOLVING"}
            onChange={handleChange}
          ></select>
        </div>

        <div className="form-group">
          <table className="log__table">
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
              <tr>
                <td>
                  <input
                    name={"scores.PROBLEM_SOLVING"}
                    ref={psOne}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    name={"scores.PROBLEM_SOLVING"}
                    ref={psTwo}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    name={"scores.PROBLEM_SOLVING"}
                    ref={psThree}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    name={"scores.PROBLEM_SOLVING"}
                    ref={psFour}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    name={"scores.PROBLEM_SOLVING"}
                    ref={psFive}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* problem solving */}

        <div className="form-group">
          <label
            style={{
              textAlign: "center",
              display: "block",
            }}
            htmlFor="username"
          >
            {t("score.sciences.solution")}
          </label>
          <select
            name="class_id"
            style={{ display: "none" }}
            ref={selectValue}
            className="login__input login__input--select"
            disabled
            defaultValue={"IMPLEMENTATION"}
            onChange={handleChange}
          ></select>
        </div>

        <div className="form-group">
          <table className="log__table">
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
              <tr>
                <td>
                  <input
                    name={"scores.IMPLEMENTATION"}
                    ref={impOne}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    name={"scores.IMPLEMENTATION"}
                    ref={impTwo}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    name={"scores.IMPLEMENTATION"}
                    ref={impThree}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    name={"scores.IMPLEMENTATION"}
                    ref={impFour}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    name={"scores.IMPLEMENTATION"}
                    ref={impFive}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* STRESS_REACTIVITY */}

        <div className="form-group">
          <label
            style={{
              textAlign: "center",
              display: "block",
            }}
            htmlFor="username"
          >
            {t("score.sciences.stress")}
          </label>
          <select
            name="class_id"
            style={{ display: "none" }}
            ref={selectValue}
            className="login__input login__input--select"
            disabled
            defaultValue={"STRESS_REACTIVITY"}
            onChange={handleChange}
          ></select>
        </div>

        <div className="form-group">
          <table className="log__table">
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
              <tr>
                <td>
                  <input
                    name={"scores.STRESS_REACTIVITY"}
                    ref={srOne}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    name={"scores.STRESS_REACTIVITY"}
                    ref={srTwo}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    name={"scores.STRESS_REACTIVITY"}
                    ref={srThree}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    name={"scores.STRESS_REACTIVITY"}
                    ref={srFour}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
                <td>
                  <input
                    name={"scores.STRESS_REACTIVITY"}
                    ref={srFive}
                    type="text"
                    minLength="1"
                    maxLength="1"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <button className="login__btn" type="submit">
          Evaluation
        </button>
      </form>
    </div>
  );
};
