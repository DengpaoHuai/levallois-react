import { useEffect, useState } from "react";

export type Specie = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
};

type SpecieResponse = {
  results: Specie[];
  count: number;
  next: string;
  previous: string;
};

const SpeciesPage = () => {
  const [species, setSpecies] = useState<Specie[]>([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://swapi.dev/api/species?page=" + page)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSpecies(data.results);
        setCount(data.count);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [page]);

  return (
    <div>
      <h1>Species Page</h1>
      {species.map((specie) => {
        return (
          <div>
            <h2>{specie.name}</h2>
            <p>Classification: {specie.classification}</p>
            <p>Designation: {specie.designation}</p>
            <p>Average Height: {specie.average_height}</p>
          </div>
        );
      })}
      <button
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Previous
      </button>
      <button
        disabled={page === Math.ceil(count / 10)}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default SpeciesPage;
