import { useFormik } from "formik";
import axios from "axios";
import { ClassSchema } from "../LoginSchema/LoginShema";
import { useEffect, useRef, useState } from "react";
import { GetElementServices } from "../../services/AxiosGenerator";

export const EditModalComponent = ({ edId }) => {
  const token = localStorage.getItem("token");
  const [room, setRoom] = useState("");
  const selectValue = useRef();
  const formik = useFormik({
    initialValues: {
      class_id: "",
    },
    onSubmit: (values) => {
      // const classId = selectValue.current.value;
      axios
        .put(
          `https://milliard-kids-backend-production.up.railway.app/user?id=${edId}`,
          {
            class_id: selectValue?.current?.value,
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

    validationSchema: ClassSchema,
  });

  // get class
  useEffect(() => {
    GetElementServices("class/all", setRoom);
  }, []);

  return (
    <form className="login__form" onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label style={{ marginBottom: "20px" }} htmlFor="username">
          Which class
        </label>
        <select
          name="class_id"
          ref={selectValue}
          className="login__input"
          defaultValue={""}
          onChange={formik.handleChange}
        >
          <option className="login__option" value="">
            choose class
          </option>
          {room?.classes?.map((item) => (
            <option className="login__option" value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <button className="login__btn" type="submit">
        Add this Class
      </button>
    </form>
  );
};
