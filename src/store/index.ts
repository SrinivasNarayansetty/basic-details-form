import { configureStore, Reducer, combineReducers } from "@reduxjs/toolkit";

import UserDataSlice from "../slices/UserDataSlice";

interface ISimpleMap {
  [field: string]: Reducer;
}
const reducerMap: ISimpleMap = {
  [UserDataSlice.name]: UserDataSlice.reducer,
};

const rootReducers = combineReducers(reducerMap);

const store = configureStore({
  reducer: rootReducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
