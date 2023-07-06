import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ICommentResponse } from "types/comments";

import { ICommentsState } from "./types";
import { createComment, getPhotoComments } from "./thunkCreators";
import { IFetchError } from "../types";
import { SLICES } from "../constant";

const initialState: ICommentsState = {
  comments: [],
  isLoading: true,
  error: "",
};

export const commentsSlice = createSlice({
  name: SLICES.COMMENTS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getPhotoComments.fulfilled.type,
      (state, action: PayloadAction<ICommentResponse[]>) => {
        state.isLoading = false;
        state.error = "";
        state.comments = action.payload;
      }
    );
    builder.addCase(getPhotoComments.pending.type, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getPhotoComments.rejected.type,
      (state, action: PayloadAction<IFetchError>) => {
        state.isLoading = false;
        state.error = action.payload.message;
      }
    );

    builder.addCase(
      createComment.fulfilled.type,
      (state, action: PayloadAction<ICommentResponse[]>) => {
        state.isLoading = false;
        state.error = "";
        state.comments = action.payload;
      }
    );
    builder.addCase(createComment.pending.type, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      createComment.rejected.type,
      (state, action: PayloadAction<IFetchError>) => {
        state.isLoading = false;
        state.error = action.payload.message;
      }
    );
  },
});

export default commentsSlice.reducer;
