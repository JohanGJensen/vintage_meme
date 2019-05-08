import { createStore, combineReducers } from "redux";
import { memeState } from "./components/reducers/reducers.js";

const root = combineReducers({ memeState });
export const store = createStore(root);
