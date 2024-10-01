import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { createAnimal, updateAnimal } from "../services/animal.service";
import FormWrapper from "../components/form/FormWrapper";
import CustomField from "../components/form/CustomField";
import { useDispatch, useSelector } from "react-redux";
import { editAnimalById } from "../store/actions/animalAction";

const UpdateAnimal = () => {
  // const data = useLoaderData();
  // useselector
  const dispatch = useDispatch();
  const { id } = useParams();
  const animal = useSelector((state) =>
    state.animals.find((item) => item._id === id)
  );
  const navigate = useNavigate();
  const iniatialValues = {
    name: animal.name,
    classification: animal.classification,
    designation: animal.designation,
    averageHeight: animal.averageHeight,
  };

  const onSubmit = (values) => {
    console.log(values);
    dispatch(editAnimalById(id, values)).then(() => {
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

export default UpdateAnimal;
