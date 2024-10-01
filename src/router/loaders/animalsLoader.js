import crudcrud from "../../services/crudcrud.instance";
import { useAnimalStore } from "../../zustand/useAnimalStore";

export const getAnimalsList = async ({ params }) => {
  const animals = useAnimalStore.getState().animals;
  if (animals.length === 0) {
    const animal = await crudcrud.get(`/animals`);
    useAnimalStore.setState({ animals: animal.data });
  }
  return true;
};
