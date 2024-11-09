import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const INITIAL_VALUES = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const dispatch = useDispatch();
  const RegisterUserSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid format")
      .required("Required!"),
    password: Yup.string().min(8, "Too short!").required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
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
          <label className={css.label}>
            Email
            <Field className={css.input} type="email" name="email" />
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>
          <label className={css.label}>
            Password
            <Field className={css.input} type="password" name="password" />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </label>
          <button type="submit">Sign In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
