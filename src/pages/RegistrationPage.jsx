import { Formik, Form } from "formik";

const INITIAL_VALUES = {};

const RegistrationPage = () => {
  return (
    <div>
      <Formik initialValues={INITIAL_VALUES}>
        <Form></Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
