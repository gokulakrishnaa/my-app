import { useFormik } from "formik";
import * as yup from "yup";

// const validateForm = (values) => {
//   const errors = {};

//   if (values.email.length < 5) {
//     errors.email = "Please provide a longer email";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Invalid Email";
//   }

//   if (values.password.length < 8) {
//     errors.password = "Please provide a longer password";
//   } else if (values.password.length > 12) {
//     errors.password = "Please provide a shorter password";
//   }
//   return errors;
// };

const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(5, "Provide Longer Email")
    .required("Email Required")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern Unmatched"),
  password: yup
    .string()
    .min(8, "Provide Longer Password")
    .max(12, "Too Long")
    .required("Password Required"),
});

export function Basicform() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      //   validate: validateForm,
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log("onsubmit", values);
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter Email Address"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      ></input>
      {errors.email && touched.email && errors.email}
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter Email Address"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      ></input>
      {errors.password && touched.password && errors.password}
      <button type="submit">Submit</button>
    </form>
  );
}
