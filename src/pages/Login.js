import { useFormik } from "formik";
import { LoginSchema } from "../components/LoginSchema/LoginShema";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // console.log(values.email, values.password);
      axios
        .post("https://milliardapi.itlink.uz/auth/login", {
          email: values.email,
          password: values.password,
        })
        .then((data) => {
          console.log(data);
          if (data.status === 200) {
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("role", data.data.user.role);
            if (data.data.user.role === "USER") {
              localStorage.setItem("userId", data.data.user.id);
            }
            navigate("/");
            window.location.reload(false);
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Xatolik, qayta urinibb ko'ring!!!");
        });
    },

    validationSchema: LoginSchema,
  });

  // const handleOtherButtonClick = (evt) => {
  //   evt.preventDefault();
  //   // Handle the other button click logic here
  //   console.log("Other button clicked");
  // };

  return (
    <div className="login">
      <div className="container">
        <div className="login__inner">
          <h2 className="login__title">Login</h2>
          <form className="login__form" onSubmit={formik.handleSubmit}>
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
                placeholder="enter your email"
              />
              {formik.touched.email && formik.errors.email ? (
                <span>{formik.errors.email}</span>
              ) : (
                ""
              )}
            </div>
            <div className="form-group form-group--relation">
              <label htmlFor="password">Password:</label>
              <input
                name="password"
                className="login__input"
                type={eye ? "text" : "password"}
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="enter your password"
              />
              {formik.touched.password && formik.errors.password ? (
                <span>{formik.errors.password}</span>
              ) : (
                ""
              )}
              <button
                type="button"
                className="form__eye"
                onClick={(e) => {
                  setEye(!eye);
                  e.preventDefault();
                }}
              />
            </div>
            <button className="login__btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
