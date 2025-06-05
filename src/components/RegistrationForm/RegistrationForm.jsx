import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import sprite from "../../img/sprite.svg";
import css from "./RegistrationForm.module.css";

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

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

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

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

          {/* Field for email */}
          <div className={css.labelWrapper}>
            <div className={css.labelContainer}>
              <label className={css.label}>Email</label>
              <ErrorMessage
                className={css.error}
                name="email"
                component="span"
              />
            </div>
            <Field className={css.input} type="email" name="email" />
          </div>

          {/* Field for password */}

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
              className={css.eyeBtn}
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

          {/* Submit button */}
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
