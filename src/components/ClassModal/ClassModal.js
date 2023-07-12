import React, { useRef, useState } from "react";
import axios from "axios";
import { NameSchema } from "../LoginSchema/LoginShema";
import { useFormik } from "formik";
import { postIlementServices } from "../../services/AxiosGenerator";

export const ClassModal = ({ IsOpen }) => {
  // const [data, setData] = useState();
  const token = localStorage.getItem("token");
  const values = useRef();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      postIlementServices(`/class/new`, {
        name: values.name,
      });
      IsOpen(false);
      // window.location.reload(false);
    },

    validationSchema: NameSchema,
  });

  return (
    <form className="classmodal" onSubmit={formik.handleSubmit}>
      <label htmlFor="class">Add new Class</label>
      {formik.touched.name && formik.errors.name ? (
        <span>{formik.errors.name}</span>
      ) : (
        ""
      )}
      <input
        ref={values}
        id="class"
        type="text"
        name="name"
        placeholder='10 "A"'
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <div>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};
