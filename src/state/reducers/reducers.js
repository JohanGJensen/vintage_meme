import * as actionType from "../actions/types";

const initialState = {
  duration: "0",
  isDragging: false,
};

export function videoState(state = initialState, action) {
  switch (action.type) {
    case actionType.CHANGE_DURATION:
      return { ...state, duration: action.payload };
    case actionType.DRAG_PIN:
      return { ...state, isDragging: action.payload };
    default:
      return state;
  }
}
