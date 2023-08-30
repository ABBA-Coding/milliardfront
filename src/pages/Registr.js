import { useFormik } from "formik";
import { RegisterSchema } from "../components/LoginSchema/LoginShema";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
// import * as Yup from "yup";

export const Registr = () => {
  const token = localStorage.getItem("token");
  const selectValue = useRef();

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      fullname: "",
      email: "",
      password: "",
      role: "",
    },
    onSubmit: (values) => {
      axios
        .post(
          "https://milliard-kids-backend-production.up.railway.app/auth/register",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
          {
            username: values.username,
            fullname: values.fullname,
            email: values.email,
            password: values.password,
            role: selectValue.current.value,
          }
        )
        .then((data) => {
          console.log(data);
          if (data.status === 200) {
            navigate("/login");
            // window.location.reload(false);
          }
        })
        .catch((err) => console.log(err));
    },

    validationSchema: RegisterSchema,
  });

  return (
    <div className="login">
      <div className="container">
        <div className="login__inner">
          <h2 className="login__title">Register</h2>
          <p className="login__question">
            Are you already registered? <Link to={"/login"}>Sign in</Link>{" "}
          </p>
          <form className="login__form" onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Choose category</label>
              <select
                name="role"
                ref={selectValue}
                className="login__input"
                defaultValue={""}
                onChange={formik.handleChange}
              >
                <option className="login__option" value="">
                  choose category
                </option>
                <option className="login__option" value="TEACHER">
                  Tracher
                </option>
                <option className="login__option" value="USER">
                  User
                </option>
                <option className="login__option" value="ADMIN">
                  Admin
                </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="username">User Name:</label>
              <input
                name="username"
                className="login__input"
                type="text"
                id="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="entr your username"
              />
              {formik.touched.username && formik.errors.username ? (
                <span>{formik.errors.username}</span>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label htmlFor="fullname">Full Name:</label>
              <input
                name="fullname"
                className="login__input"
                type="text"
                id="fullname"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="entr your fullname"
              />
              {formik.touched.username && formik.errors.username ? (
                <span>{formik.errors.username}</span>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                name="email"
                className="login__input"
                type="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="entr your email"
              />
              {formik.touched.email && formik.errors.email ? (
                <span>{formik.errors.email}</span>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                name="password"
                className="login__input"
                type="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="entr your password"
              />
              {formik.touched.password && formik.errors.password ? (
                <span>{formik.errors.password}</span>
              ) : (
                ""
              )}
            </div>
            <button className="login__btn" type="submit">
              Registr
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
