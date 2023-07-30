import { combineReducers } from "redux";
import btDatVeReducer from "./btDatVe/reducer";

export const rootReducer = combineReducers({
  btDatVe: btDatVeReducer,
});
