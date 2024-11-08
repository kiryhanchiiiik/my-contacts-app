import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const INITIAL_VALUES = {};

const RegistrationPage = () => {
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
    console.log(values);
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={RegisterUserSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <span>Name:</span>
            <Field type="text" name="name" placeholder="Name Surname" />
            <ErrorMessage name="name" component="span" />
          </label>
        </Form>
        <Form>
          <label>
            <span>Email:</span>
            <Field type="text" name="email" placeholder="example@test.com" />
            <ErrorMessage name="email" component="span" />
          </label>
        </Form>
        <Form>
          <label>
            <span>Password:</span>
            <Field type="text" name="password" placeholder="*********" />
            <ErrorMessage name="password" component="span" />
          </label>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
