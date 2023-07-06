import { RootState } from "store";

export const photosSelector = (state: RootState) =>
  state.photosReducer.currentPhotos;
export const photoSelector = (state: RootState) => state.photosReducer.photo;
export const categorySelector = (state: RootState) =>
  state.photosReducer.category;
export const isLoadingSelector = (state: RootState) =>
  state.photosReducer.isLoading;
export const errorSelector = (state: RootState) => state.photosReducer.error;
