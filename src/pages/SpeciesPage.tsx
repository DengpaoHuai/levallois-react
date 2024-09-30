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
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("https://swapi.dev/api/species/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSpecies(data.results);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [refresh]);

  return (
    <div>
      <h1>Species Page</h1>
      <button onClick={() => setRefresh(!refresh)}>Refresh</button>
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
    </div>
  );
};

export default SpeciesPage;
