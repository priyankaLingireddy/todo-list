import {createStore, applyMiddleware } from "redux";
// import cakeReducer from './Cakes/cakeReducer'
// import createStore from './createReduxStore'
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
const store = createStore(rootReducer,applyMiddleware(logger,thunk));

export default store;
