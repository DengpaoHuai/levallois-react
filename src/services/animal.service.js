export const createAnimal = async (animal) => {
  const response = await fetch(
    `https://crudcrud.com/api/${import.meta.env.VITE_KEY}/animals`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animal),
    }
  );
  return response.json();
};

export const deleteAnimal = async (id) => {
  const response = await fetch(
    `https://crudcrud.com/api/${import.meta.env.VITE_KEY}/animals/${id}`,
    {
      method: "DELETE",
    }
  );
  return true;
};

export const updateAnimal = async (id, animal) => {
  const response = await fetch(
    `https://crudcrud.com/api/${import.meta.env.VITE_KEY}/animals/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animal),
    }
  );
  return true;
};
