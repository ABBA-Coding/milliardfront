import { useFormik } from "formik";
import axios from "axios";
import { RegisterSchema } from "../LoginSchema/LoginShema";

export const AditionModal = ({ role }) => {
  const token = localStorage.getItem("token");
  const formik = useFormik({
    initialValues: {
      username: "",
      fullname: "",
      password: "",
      email: "",
      role: "",
    },
    onSubmit: (values) => {
      axios
        .post(
          "https://milliard-kids-backend-production.up.railway.app/auth/register",
          {
            username: values.username,
            fullname: values.fullname,
            password: values.password,
            email: values.email,
            role: role,
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
            // IsOpen(false);
            window.location.reload(false);
          }
        })
        .catch((err) => console.log(err));
    },

    validationSchema: RegisterSchema,
  });

  return (
    <form className="login__form" onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">{role} Name:</label>
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
        {formik.touched.fullname && formik.errors.fullname ? (
          <span>{formik.errors.fullname}</span>
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
        Add
      </button>
    </form>
  );
};
