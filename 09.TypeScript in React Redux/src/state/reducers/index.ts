import { combineReducers } from "redux";
import packagesReducer from "./packages.reducer";

export const reducers = combineReducers({
  packages: packagesReducer,
})

export type AppState = ReturnType<typeof reducers>;