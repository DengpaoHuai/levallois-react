import { useEffect, useState } from "react";
import { deleteAnimal } from "../services/animal.service";
import { Link } from "react-router-dom";

const AnimalsScreen = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("https://crudcrud.com/api/b680a69bf8054e18bf625f1f75626985/animals")
      .then((response) => response.json())
      .then((data) => setAnimals(data));
  }, []);

  return (
    <div>
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
                setAnimals(animals.filter((a) => a._id !== animal._id));
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
