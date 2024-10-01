import { ErrorMessage, Field } from "formik";

const CustomField = ({ label, name, id = name, ...fieldValues }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Field {...fieldValues} name={name} id={id} />
      <ErrorMessage name={name} />
    </>
  );
};

export default CustomField;
