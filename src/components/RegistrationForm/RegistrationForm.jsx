import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};
const RegistrationForm = () => {
  const dispatch = useDispatch();

  const RegisterUserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(20, "Too Long!")
      .required("Required!"),
    email: Yup.string()
      .email("Email must be a valid format")
      .required("Required!"),
    password: Yup.string().min(8, "Too short!").required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={RegisterUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          {/* Field for name */}
          <label className={css.label}>
            Name
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage className={css.error} name="name" component="span" />
          </label>

          {/* Field for email */}
          <label className={css.label}>
            Email
            <Field className={css.input} type="email" name="email" />
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>

          {/* Field for password */}
          <label className={css.label}>
            Password
            <Field className={css.input} type="password" name="password" />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </label>

          {/* Submit button */}
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
