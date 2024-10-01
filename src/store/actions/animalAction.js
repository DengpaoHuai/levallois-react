export const SET_ALL_ANIMALS = "SET_ALL_ANIMALS";
export const DELETE_ANIMAL = "DELETE_ANIMAL";

export const setAll = (animals) => {
  return {
    type: SET_ALL_ANIMALS,
    payload: animals,
  };
};

export const deleteAnimalById = (id) => {
  return {
    type: DELETE_ANIMAL,
    payload: id,
  };
};
