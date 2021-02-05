import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { itemsReducer } from "./itemsReducer";
import { fetchClickReducer } from "./fetchClickReducer";

export const reducer = combineReducers({
  catalog: itemsReducer,
  app: appReducer,
  button: fetchClickReducer
});
