import { FETCH_CATALOG } from "./types";

const initialState = {
  items: [],
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATALOG:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
