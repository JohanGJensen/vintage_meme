import * as actionType from "../actions/types";

const initialState = {
  duration: 60,
  selectedVideo: null,
};

export function videoState(state = initialState, action) {
  switch (action.type) {
    case actionType.CHANGE_DURATION:
      return { ...state, duration: action.payload };
    case actionType.CHANGE_VIDEO:
      return { ...state, selectedVideo: action.payload };
    default:
      return state;
  }
}
