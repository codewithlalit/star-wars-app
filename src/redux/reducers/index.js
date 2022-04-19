import { combineReducers } from "redux";
import starCastReducer from "./starCast";

const reducers = combineReducers({
  starCast: starCastReducer,
});

export default reducers;
