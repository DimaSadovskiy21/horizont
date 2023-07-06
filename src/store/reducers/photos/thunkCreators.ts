import { createAsyncThunk } from "@reduxjs/toolkit";

import { photosApi } from "api";
import { IPhotoResponse } from "types/photos";

import { IFetchError } from "../types";
import { ERROR, THUNKS } from "../constant";

export const getPhotos = createAsyncThunk<
  IPhotoResponse[],
  undefined,
  { rejectValue: IFetchError }
>(THUNKS.GET_PHOTOS, async (_, { rejectWithValue }) => {
  try {
    const response = await photosApi.getPhotos();

    return response;
  } catch (error) {
    return rejectWithValue({ message: ERROR.API_ERROR });
  }
});

export const getPhoto = createAsyncThunk<
  IPhotoResponse,
  string,
  { rejectValue: IFetchError }
>(THUNKS.GET_PHOTO, async (photoId, { rejectWithValue }) => {
  try {
    const response = await photosApi.getPhoto(photoId);

    return response;
  } catch (error) {
    return rejectWithValue({ message: ERROR.API_ERROR });
  }
});
