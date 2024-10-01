import { Form, Formik } from "formik";

const FormWrapper = ({ children, ...formParams }) => {
  return (
    <Formik {...formParams}>
      <Form>{children}</Form>
    </Formik>
  );
};

export default FormWrapper;
