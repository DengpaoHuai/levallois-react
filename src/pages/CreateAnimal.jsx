import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createAnimal } from "../services/animal.service";
import FormWrapper from "../components/form/FormWrapper";
import CustomField from "../components/form/CustomField";

const CreateAnimal = () => {
  const navigate = useNavigate();
  const iniatialValues = {
    name: "",
    classification: "",
    designation: "",
    averageHeight: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    createAnimal(values).then(() => {
      navigate("/animals");
    });
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
      <FormWrapper
        initialValues={iniatialValues}
        onSubmit={onSubmit}
        validationSchema={animalSchema}
      >
        <CustomField name="name" label="Name" />
        <CustomField name="classification" label="Classification" />
        <CustomField name="designation" label="Designation" />
        <CustomField
          name="averageHeight"
          label="Average Height"
          type="number"
        />
        <button type="submit">Create</button>
      </FormWrapper>
    </div>
  );
};

export default CreateAnimal;
