import {
  CREATE_ANIMAL,
  DELETE_ANIMAL,
  EDIT_ANIMAL,
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
    case EDIT_ANIMAL:
      let temp = state.animals;
      console.log(temp);
      let index = state.animals.findIndex(
        (item) => item._id === action.payload.id
      );
      temp[index] = {
        ...temp[index],
        ...action.payload.animal,
      };
      console.log(temp);
      return {
        ...state,
        animals: temp,
      };
    default:
      return state;
  }
};

export default animalReducer;
