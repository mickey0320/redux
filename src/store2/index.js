import { createStore, applyMiddleware, thunk, logger, reduxPromise } from "../redux";
import reducers from "./reducers";

const store = applyMiddleware(logger, thunk, reduxPromise)(createStore)(reducers);

export default store;
