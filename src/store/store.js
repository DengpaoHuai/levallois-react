import { createStore } from "redux";
import animalReducer from "./reducers/animalReducer";

const store = createStore(animalReducer);

export default store;
