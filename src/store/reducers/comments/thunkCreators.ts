import { createAsyncThunk } from "@reduxjs/toolkit";

import { commentsApi } from "api";
import { ICommentResponse } from "types/comments";

import { IFetchError } from "../types";
import { ERROR, THUNKS } from "../constant";

export const getPhotoComments = createAsyncThunk<
  ICommentResponse[],
  string,
  { rejectValue: IFetchError }
>(THUNKS.GET_PHOTO_COMMENTS, async (photoId, { rejectWithValue }) => {
  try {
    const response = await commentsApi.getPhotoComments(photoId);

    return response;
  } catch (error) {
    return rejectWithValue({ message: ERROR.API_ERROR });
  }
});

export const createComment = createAsyncThunk<
  ICommentResponse[],
  ICommentResponse,
  { rejectValue: IFetchError }
>(THUNKS.CREATE_COMMENTS, async (newComment, { rejectWithValue }) => {
  try {
    const response = await commentsApi.createComment(newComment);

    return response;
  } catch (error) {
    return rejectWithValue({ message: ERROR.API_ERROR });
  }
});
