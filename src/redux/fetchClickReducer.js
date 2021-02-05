import { FETCH_CLICK } from "./types";

const initialState = {
  clicked: false
};

export const fetchClickReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLICK:
      return { ...state, clicked: true };
    default:
      return state;
  }
};
