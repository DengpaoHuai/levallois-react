import crudcrud from "../../services/crudcrud.instance";

export const SET_ALL_ANIMALS = "SET_ALL_ANIMALS";
export const DELETE_ANIMAL = "DELETE_ANIMAL";
export const CREATE_ANIMAL = "CREATE_ANIMAL";

export const setAll = () => {
  return function (dispatch) {
    return crudcrud
      .get("/animals")
      .then((response) => {
        dispatch({
          type: SET_ALL_ANIMALS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const deleteAnimalById = (id) => {
  return {
    type: DELETE_ANIMAL,
    payload: id,
  };
};

export const createAnimalRedux = (animal) => {
  return function (dispatch) {
    return crudcrud.post("/animals", animal).then((response) => {
      dispatch({
        type: CREATE_ANIMAL,
        payload: response.data,
      });
    });
  };
};
