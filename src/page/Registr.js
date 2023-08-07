import { useFormik } from "formik";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { RegisterSchema } from "../components/FormSchema/FormSchema";

export const Registr = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post("https://milliardapi.itlink.uz/auth/register", {
          username: values.username,
          email: values.email,
          password: values.password,
        })
        .then((data) => {
          console.log(data);
          if (data.status === 200) {
            navigate("/login");
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
