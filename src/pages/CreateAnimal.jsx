import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";

const CreateAnimal = () => {
  const iniatialValues = {
    name: "",
    classification: "",
    designation: "",
    averageHeight: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const animalSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    classification: Yup.string().required("Classification is required"),
    designation: Yup.string().required("Designation is required"),
    averageHeight: Yup.number()
      .min(0, "taille négative impossible")
      .required("Average Height is required"),
  });

  return (
    <div>
      <h1>Create Animal</h1>
      <Formik
        initialValues={iniatialValues}
        onSubmit={onSubmit}
        validationSchema={animalSchema}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" />
          <ErrorMessage name="name" />
          <label htmlFor="classification">Classification</label>
          <Field id="classification" name="classification" />
          <ErrorMessage name="classification" />
          <label htmlFor="designation">Designation</label>
          <Field id="designation" name="designation" />
          <ErrorMessage name="designation" />
          <label htmlFor="averageHeight">Average Height</label>
          <Field id="averageHeight" name="averageHeight" />
          <ErrorMessage name="averageHeight" />
          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateAnimal;
