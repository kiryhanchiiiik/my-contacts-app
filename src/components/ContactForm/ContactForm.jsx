import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
const ContactForm = () => {
  const dispatch = useDispatch();
  const FormValidate = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too Long!")
      .required("Required!!!"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too Long!")
      .required("Required!!!"),
  });
  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };
  const nameFieldId = useId();
  const numberFieldId = useId();
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ name: "", number: "" }}
      validationSchema={FormValidate}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage
          className={css.ErrorMessage}
          name="name"
          component="span"
        />
        <label htmlFor={numberFieldId}>Number</label>
        <Field type="text" name="number" id={numberFieldId} />
        <ErrorMessage
          className={css.ErrorMessage}
          name="number"
          component="span"
        />
        <div className={css.buttonContainer}>
          <button type="submit">Add Contact</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
