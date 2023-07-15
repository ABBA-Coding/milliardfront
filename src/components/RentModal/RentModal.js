import { useFormik } from "formik";
import axios from "axios";
import { useRef } from "react";

export const RentModal = ({ isOpen, id }) => {
  const token = localStorage.getItem("token");
  const selectValue = useRef();
  const oneValue = useRef();
  const twoValue = useRef();
  const threeValue = useRef();
  const fourValue = useRef();
  const fiveValue = useRef();
  const Arr = [];

  const formik = useFormik({
    initialValues: {
      skill: "",
      scores: "",
    },
    onSubmit: (values) => {
      Arr.push(Number(oneValue?.current?.value));
      Arr.push(Number(twoValue?.current?.value));
      Arr.push(Number(threeValue?.current?.value));
      Arr.push(Number(fourValue?.current?.value));
      Arr.push(Number(fiveValue?.current?.value));

      axios
        .post(
          `https://milliard-kids-backend-production.up.railway.app/student/mark?id=${id}`,
          {
            skill: selectValue?.current?.value,
            scores: Arr,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((data) => {
          console.log(data);
          if (data.status === 200) {
            isOpen(false);
            window.location.reload(false);
          }
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <form className="login__form agent" onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label
          style={{
            marginBottom: "20px",
            textAlign: "center",
            display: "block",
          }}
          htmlFor="username"
        >
          Choose category
        </label>
        <select
          name="class_id"
          ref={selectValue}
          className="login__input login__input--select"
          defaultValue={""}
          onChange={formik.handleChange}
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
                <input ref={twoValue} type="text" minLength="1" maxLength="1" />
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

      <button className="login__btn" type="submit">
        Evaluation
      </button>
    </form>
  );
};
