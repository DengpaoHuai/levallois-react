import { useEffect, useState } from "react";
import { deleteAnimal } from "../services/animal.service";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnimalById, setAll } from "../store/actions/animalAction";

const AnimalsScreen = () => {
  const animals = useSelector((state) => state.animals);
  const dispatch = useDispatch();

  useEffect(() => {
    if (animals.length > 0) return;
    fetch("https://crudcrud.com/api/b680a69bf8054e18bf625f1f75626985/animals")
      .then((response) => response.json())
      .then((data) => dispatch(setAll(data)));
  }, []);

  return (
    <div>
      <Link to="/create_animal">Create Animal</Link>
      <h1>Animals Screen</h1>
      {animals.map((animal) => (
        <div key={animal._id}>
          <h2>{animal.name}</h2>
          <p>{animal.classification}</p>
          <p>{animal.designation}</p>
          <p>{animal.averageHeight}</p>
          <button
            onClick={() =>
              deleteAnimal(animal._id).then(() => {
                dispatch(deleteAnimalById(animal._id));
              })
            }
          >
            delete
          </button>
          <Link to={`/update-animal/${animal._id}`}>Update</Link>
        </div>
      ))}
    </div>
  );
};

export default AnimalsScreen;
