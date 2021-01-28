import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { itemsReducer } from "./itemsReducer";
import { basketReducer } from "./basketReducer";

export const reducer = combineReducers({
  catalog: itemsReducer,
  app: appReducer,
  basket: basketReducer,
});
