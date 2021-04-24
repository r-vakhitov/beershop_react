import { HIDE_LOADER, SHOW_LOADER, IAppState, IAppAction } from "../types/types";

const initialState: IAppState = {
  loading: false,
};

export const appReducer = (state = initialState, action: IAppAction) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
