import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import sprite from "../../img/sprite.svg";
import css from "./LoginForm.module.css";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(20, "Too Long!")
    .required("Required!"),
  password: Yup.string().min(8, "Too short!").required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShotPassword] = useState(false);

  const togglePasswordVisibility = () => setShotPassword((prev) => !prev);

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={LoginUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.labelWrapper}>
            <div className={css.labelContainer}>
              <label className={css.label}>Name</label>
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
            </div>
            <Field className={css.input} type="text" name="name" />
          </div>
          <div className={css.labelWrapper}>
            <div className={css.labelContainer}>
              <label className={css.label}>Password</label>
              <ErrorMessage
                className={css.error}
                name="password"
                component="span"
              />
            </div>
            <Field
              className={css.input}
              type={showPassword ? "text" : "password"}
              name="password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={css.eyeBtnLogin}
              aria-label="Toggle password visibility"
            >
              <svg className={css.eyeIcon} width={25} height={25}>
                <use
                  href={`${sprite}#${
                    showPassword ? "icon-eye" : "icon-eye-off"
                  }`}
                />
              </svg>
            </button>
          </div>

          <button type="submit">Sign In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
