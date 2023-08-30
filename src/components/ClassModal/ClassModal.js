import React, { useRef } from "react";
import { NameSchema } from "../LoginSchema/LoginShema";
import { useFormik } from "formik";
import { postIlementServices } from "../../services/AxiosGenerator";
import { ExitIcon } from "../../assets/images/img/img";

export const ClassModal = ({ IsOpen }) => {
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
    },
    validationSchema: NameSchema,
  });

  return (
    <form className="classmodal" onSubmit={formik.handleSubmit}>
      <button className="exit_btn" onClick={() => IsOpen(false)}>
        <ExitIcon />
      </button>
      <label htmlFor="class">Add new group</label>
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
