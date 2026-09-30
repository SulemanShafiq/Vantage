import * as Yup from "yup";
const formValidationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Kam se kam 2 characters")
    .required("This field is requires"),

  lastName: Yup.string()
    .min(2, "Kam se kam 2 characters")
    .required("This field is requires"),

  email: Yup.string()
    .email("Enter a valid email address")
    .required("This field is requires"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("This field is requires"),
});

export const recoverValidationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()

    .min(6, "Password must be at least 6 characters")
    .required("This field is requires"),
});

export default formValidationSchema;
