import * as actionType from "../actions/types";

const initialState = {
  duration: "0",
};

export function videoState(state = initialState, action) {
  switch (action.type) {
    case actionType.CHANGE_DURATION:
      return { ...state, duration: action.payload };

    default:
      return state;
  }
}
