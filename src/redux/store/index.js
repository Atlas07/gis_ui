import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer";

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept("../reducer", () => {
      const nextRootReducer = require("../reducer");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore();
