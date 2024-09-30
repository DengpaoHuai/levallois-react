import { useState } from "react";

const CreateAnimal = () => {
  const [name, setName] = useState("");
  const [classification, setClassification] = useState("");
  const [designation, setDesignation] = useState("");
  const [averageHeight, setAverageHeight] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      classification,
      designation,
      average_height: averageHeight,
    };
    console.log(data);
  };

  return (
    <div>
      <h1>Create Animal</h1>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Classification</label>
        <input
          type="text"
          name="classification"
          value={classification}
          onChange={(e) => setClassification(e.target.value)}
        />
        <label>Designation</label>
        <input
          type="text"
          name="designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <label>Average Height</label>
        <input
          type="text"
          name="average_height"
          value={averageHeight}
          onChange={(e) => setAverageHeight(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateAnimal;
