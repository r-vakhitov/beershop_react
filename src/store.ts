import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./redux/reducer";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
