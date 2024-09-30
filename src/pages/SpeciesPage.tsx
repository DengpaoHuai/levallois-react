import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export type Specie = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  url: string;
};

type SpecieResponse = {
  results: Specie[];
  count: number;
  next: string | null;
  previous: string | null;
};

const SpeciesPage = () => {
  const [speciesResponse, setSpeciesResponse] = useState<SpecieResponse>({
    results: [],
    count: 0,
    next: null,
    previous: null,
  });
  const navigate = useNavigate();

  const getData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setSpeciesResponse(data);
  };

  useEffect(() => {
    getData("https://swapi.dev/api/species");
  }, []);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      console.log(e);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      console.log("je suis démonté");
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        height: "500vh",
      }}
    >
      <a href="/welcome">welcome</a>
      <Link to="/welcome">welcome</Link>
      <button
        onClick={() => {
          // window.location.href = "/welcome";
          navigate("/welcome");
        }}
      >
        redirect
      </button>
      <h1>Species Page</h1>
      {speciesResponse.results.map((specie) => {
        return (
          <Fragment key={specie.url}>
            <h2>{specie.name}</h2>
            <p>Classification: {specie.classification}</p>
            <p>Designation: {specie.designation}</p>
            <p>Average Height: {specie.average_height}</p>
          </Fragment>
        );
      })}
      <button
        disabled={!speciesResponse.previous}
        onClick={() =>
          speciesResponse.previous && getData(speciesResponse.previous)
        }
      >
        Previous
      </button>
      <button
        disabled={!speciesResponse.next}
        onClick={() => speciesResponse.next && getData(speciesResponse.next)}
      >
        Next
      </button>
    </div>
  );
};

export default SpeciesPage;
