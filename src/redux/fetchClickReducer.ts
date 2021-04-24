import { FETCH_CLICK, IFetchClickState, IFetchClickAction } from "../types/types";

const initialState: IFetchClickState = {
  clicked: false
};

export const fetchClickReducer = (state = initialState, action: IFetchClickAction) => {
  switch (action.type) {
    case FETCH_CLICK:
      return { ...state, clicked: true };
    default:
      return state;
  }
};
