import { useEffect } from "react";
import { create } from "zustand";
import { getAllAnimals } from "../services/animal.service";
import crudcrud from "../services/crudcrud.instance";

export const useAnimalStore = create((set) => ({
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
  updateAnimal: (id, animal) => {
    set((state) => ({
      animals: state.animals.map((a) =>
        a._id === id
          ? {
              ...a,
              ...animal,
            }
          : a
      ),
    }));
  },
}));

const useAnimals = () => {
  const {
    setAllAnimals,
    deleteAnimalById,
    createAnimal,
    updateAnimal,
    ...params
  } = useAnimalStore();

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

  const getAnimalById = (id) => {
    return params.animals.find((animal) => animal._id === id);
  };

  const editAnimal = async (id, animal) => {
    await crudcrud.put(`/animals/${id}`, animal);
    updateAnimal(id, animal);
  };

  return { ...params, deleteAnimal, addAnimal, getAnimalById, editAnimal };
};

export default useAnimals;
