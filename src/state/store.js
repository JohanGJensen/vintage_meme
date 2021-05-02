import { createStore, combineReducers } from "redux";
import { memeState } from "./reducers/reducers";

const root = combineReducers({ memeState });
export const store = createStore(root);
