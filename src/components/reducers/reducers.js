import * as actionType from "../actions/types.js";

const defaultState = {
  titleColor: "primary",
  memeText: "",
  memeGallery: [],
  changeColor: "white"
};

export function memeState(state = defaultState, action) {
  switch (action.type) {
    case actionType.TOGGLE_TITLE_COLOR:
      return {
        ...state,
        titleColor: state.titleColor === "primary" ? "secondary" : "primary"
      };
    case actionType.WRITE_MEME_CAPTION:
      return { ...state, memeText: action.payload };
    case actionType.SAVE_MEME:
      return {
        ...state,
        memeGallery: [...state.memeGallery, action.payload]
      };
    case actionType.CHANGE_COLOR:
      return { ...state, changeColor: action.payload };

    default:
      return state;
  }
}
