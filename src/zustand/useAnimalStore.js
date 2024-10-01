import { useEffect } from "react";
import { create } from "zustand";
import { getAllAnimals } from "../services/animal.service";
import crudcrud from "../services/crudcrud.instance";

const useAnimalStore = create((set) => ({
  animals: [],
  setAllAnimals: (animals) => set({ animals }),
  deleteAnimalById: (id) =>
    set((state) => ({
      animals: state.animals.filter((animal) => animal._id !== id),
    })),
  createAnimal: (animal) =>
    set((state) => ({
      animals: [...state.animals, animal],
    })),
}));

const useAnimals = () => {
  const { setAllAnimals, deleteAnimalById, createAnimal, ...params } =
    useAnimalStore();

  useEffect(() => {
    if (params.animals.length > 0) return;
    getAllAnimals().then((data) => {
      setAllAnimals(data.data);
    });
  }, []);

  const deleteAnimal = async (id) => {
    await crudcrud.delete(`/animals/${id}`);
    deleteAnimalById(id);
  };

  const addAnimal = async (animal) => {
    const response = await crudcrud.post("/animals", animal);
    createAnimal(response.data);
  };

  return { ...params, deleteAnimal, addAnimal };
};

export default useAnimals;
