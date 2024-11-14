import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { getMeowFacts } from "../services/meow.service";

//https://meowfacts.herokuapp.com/?count=3

const DemoPage = () => {
  const { data } = useFetch(getMeowFacts);

  return (
    <div>
      <h1>Demo Page</h1>
      {data?.map((fact, key) => (
        <p key={key}>{fact}</p>
      ))}
    </div>
  );
};

export default DemoPage;
