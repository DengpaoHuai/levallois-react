import { useEffect, useState } from "react";
import { deleteAnimal, getAllAnimals } from "../services/animal.service";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnimalById, setAll } from "../store/actions/animalAction";
import crudcrud from "../services/crudcrud.instance";
import { setLocale } from "yup";
import useFetch from "../hooks/useFetch";
import useAnimals from "../zustand/useAnimalStore";

const AnimalsScreen = () => {
  const { data: animals, isLoading } = useFetch(getAllAnimals);
  //const { animals, deleteAnimal } = useAnimals();

  return (
    <div>
      <Link to="/create_animal">Create Animal</Link>
      <h1>Animals Screen</h1>
      {animals?.map((animal) => (
        <div key={animal._id}>
          <h2>{animal.name}</h2>
          <p>{animal.classification}</p>
          <p>{animal.designation}</p>
          <p>{animal.averageHeight}</p>
          <button onClick={() => deleteAnimal(animal._id)}>delete</button>
          <Link to={`/update-animal/${animal._id}`}>Update</Link>
        </div>
      ))}
    </div>
  );
};

export default AnimalsScreen;
