import {createStore, applyMiddleware, Middleware} from "redux";
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import aliases from "./aliases";
import {alias} from "react-chrome-redux";
import {reducer} from "./../reducers/rootReducer";
import { POPUP_PROPS } from "../types";


let enhancer: any;
if (process.env.NODE_ENV !== "production") {
  const logger: Middleware = createLogger({
    collapsed: true
  });
  enhancer = applyMiddleware(alias(aliases), thunkMiddleware, logger);
} else {
  enhancer = applyMiddleware(alias(aliases), thunkMiddleware);
}
export default function(initalState: POPUP_PROPS) {
  return createStore(reducer, initalState, enhancer);
}
