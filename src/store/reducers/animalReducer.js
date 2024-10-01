import {
  CREATE_ANIMAL,
  DELETE_ANIMAL,
  SET_ALL_ANIMALS,
} from "../actions/animalAction";

const initialState = {
  animals: [],
};

const animalReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_ALL_ANIMALS:
      return {
        ...state,
        animals: action.payload,
      };
    case DELETE_ANIMAL:
      return {
        ...state,
        animals: state.animals.filter(
          (animal) => animal._id !== action.payload
        ),
      };
    case CREATE_ANIMAL:
      return {
        ...state,
        animals: [...state.animals, action.payload],
      };
    default:
      return state;
  }
};

export default animalReducer;
