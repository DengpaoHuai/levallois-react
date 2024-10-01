import { applyMiddleware, createStore } from "redux";
import animalReducer from "./reducers/animalReducer";
import { thunk } from "redux-thunk";

const store = createStore(animalReducer, applyMiddleware(thunk));

export default store;
