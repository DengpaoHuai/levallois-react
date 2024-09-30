import { useRef, useState } from "react";

const CreateAnimal = () => {
  const name = useRef<HTMLInputElement>(null);
  const classification = useRef<HTMLInputElement>(null);
  const designation = useRef<HTMLInputElement>(null);
  const averageHeight = useRef<HTMLInputElement>(null);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name.current?.value);
    console.log(classification.current?.value);
    console.log(designation.current?.value);
    console.log(averageHeight.current?.value);
  };

  return (
    <div>
      <h1>Create Animal</h1>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input type="text" name="name" ref={name} />
        <label>Classification</label>
        <input type="text" name="classification" ref={classification} />
        <label>Designation</label>
        <input type="text" name="designation" ref={designation} />
        <label>Average Height</label>
        <input type="text" name="average_height" ref={averageHeight} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateAnimal;
