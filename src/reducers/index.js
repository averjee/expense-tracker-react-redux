import { combineReducers } from "redux";
import gloBalReducer from "./globalReducer";

export default combineReducers({
  transactions: gloBalReducer
});
