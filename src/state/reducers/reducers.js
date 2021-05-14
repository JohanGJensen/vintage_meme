import * as actionType from "../actions/types";

const initialVideoState = {
  playing: false,
  duration: 60,
  currentTime: 0,
  selectedVideo: null,
};

export function videoState(state = initialVideoState, action) {
  switch (action.type) {
    case actionType.CHANGE_PLAYING:
      return { ...state, playing: action.payload };
    case actionType.CHANGE_DURATION:
      return { ...state, duration: action.payload };
    case actionType.CHANGE_VIDEO:
      return { ...state, selectedVideo: action.payload };
    case actionType.CHANGE_CURRENT_TIME:
      return { ...state, currentTime: action.payload };
    default:
      return state;
  }
}
