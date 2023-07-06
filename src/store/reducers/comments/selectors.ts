import { RootState } from "store";

export const commentsSelector = (state: RootState) =>
  state.commentsReducer.comments;
export const isLoadingSelector = (state: RootState) =>
  state.commentsReducer.isLoading;
export const errorSelector = (state: RootState) => state.commentsReducer.error;
