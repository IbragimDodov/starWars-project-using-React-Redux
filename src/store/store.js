import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers'
import { setLocalStorage } from "../utils/localStorage";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  setLocalStorage('store', store.getState().favoriteReducer)
})

export default store;