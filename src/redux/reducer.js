import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { itemsReducer } from "./itemsReducer";

export const reducer = combineReducers({
  catalog: itemsReducer,
  app: appReducer,
});
