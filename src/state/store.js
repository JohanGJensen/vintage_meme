import { createStore } from "redux";
import { videoState } from "./reducers/reducers";

export const store = createStore(videoState);
