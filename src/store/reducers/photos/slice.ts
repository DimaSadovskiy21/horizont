import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IPhotoResponse, TCategory } from "types/photos";
import { CATEGORIES } from "constant/categories";

import { IPhotosState } from "./types";
import { getPhoto, getPhotos } from "./thunkCreators";
import { IFetchError } from "../types";
import { SLICES } from "../constant";

const initialState: IPhotosState = {
  photos: [],
  currentPhotos: [],
  photo: {} as IPhotoResponse,
  category: CATEGORIES.ALL,
  isLoading: true,
  error: "",
};

export const photosSlice = createSlice({
  name: SLICES.PHOTOS,
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<TCategory>) {
      state.category = action.payload;
      action.payload === CATEGORIES.ALL
        ? (state.currentPhotos = state.photos)
        : (state.currentPhotos = state.photos.filter(
            ({ category }) => category === action.payload
          ));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getPhotos.fulfilled.type,
      (state, action: PayloadAction<IPhotoResponse[]>) => {
        state.isLoading = false;
        state.error = "";
        state.photos = action.payload;
        state.currentPhotos = action.payload;
      }
    );
    builder.addCase(getPhotos.pending.type, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getPhotos.rejected.type,
      (state, action: PayloadAction<IFetchError>) => {
        state.isLoading = false;
        state.error = action.payload.message;
      }
    );

    builder.addCase(
      getPhoto.fulfilled.type,
      (state, action: PayloadAction<IPhotoResponse>) => {
        state.isLoading = false;
        state.error = "";
        state.photo = action.payload;
      }
    );
    builder.addCase(getPhoto.pending.type, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getPhoto.rejected.type,
      (state, action: PayloadAction<IFetchError>) => {
        state.isLoading = false;
        state.error = action.payload.message;
      }
    );
  },
});

export const { setCategory } = photosSlice.actions;

export default photosSlice.reducer;
