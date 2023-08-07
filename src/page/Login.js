import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../components/FormSchema/FormSchema";

export const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post("https://milliardapi.itlink.uz/auth/login", {
          username: values.username,
          password: values.password,
        })
        .then((data) => {
          console.log(data);
          if (data.status === 200) {
            localStorage.setItem("teacher-token", data.data.token);
            navigate("/");
            window.location.reload(false);
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Xatolik qayta urinibb ko'ring!!!");
        });
    },

    validationSchema: LoginSchema,
  });

  return (
    <div className="login">
      <div className="container">
        <div className="login__inner">
          <h2 className="login__title">Login</h2>
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
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
