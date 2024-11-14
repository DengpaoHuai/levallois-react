import { applyMiddleware, createStore, legacy_createStore } from "redux";
import animalReducer from "./reducers/animalReducer";
import { thunk } from "redux-thunk";

const store = legacy_createStore(animalReducer, applyMiddleware(thunk));

export default store;
