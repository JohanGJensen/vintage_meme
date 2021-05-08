import * as actionType from "../actions/types";

const initialState = {
  titleColor: "primary",
  memeText: "",
  memeGallery: [],
  duration: "white",
};

export function videoState(state = initialState, action) {
  switch (action.type) {
    case actionType.TOGGLE_TITLE_COLOR:
      return {
        ...state,
        titleColor: state.titleColor === "primary" ? "secondary" : "primary",
      };
    case actionType.WRITE_MEME_CAPTION:
      return { ...state, memeText: action.payload };
    case actionType.SAVE_MEME:
      return {
        ...state,
        memeGallery: [...state.memeGallery, action.payload],
      };
    case actionType.CHANGE_DURATION:
      return { ...state, duration: action.payload };

    default:
      return state;
  }
}
