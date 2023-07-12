import * as Yup from "yup";

export const RegisterSchema = Yup.object({
  username: Yup.string().required("Username is Required !"),
  fullname: Yup.string().required("Fullname is Required !"),
  email: Yup.string()
    .email("invalid email format !")
    .required("Email is Required !"),
  password: Yup.string()
    .min(3, "to short")
    .max(15, "to long")
    .required("Password is Required !"),
});

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email("invalid email format !")
    .required("Email is Required !"),
  password: Yup.string()
    .min(3, "to short")
    .max(15, "to long")
    .required("Password is Required !"),
});

export const NameSchema = Yup.object({
  name: Yup.string().required("Name is Required !"),
});

export const ClassSchema = Yup.object({
  class_id: Yup.string().required("Class is Required !"),
});
