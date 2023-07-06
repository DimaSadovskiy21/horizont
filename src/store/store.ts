import { combineReducers, configureStore } from "@reduxjs/toolkit";

import photosReducer from "./reducers/photos";
import commentsReducer from "./reducers/comments"

const rootReducer = combineReducers({
  photosReducer,
  commentsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
