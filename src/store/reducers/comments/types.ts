import { ICommentResponse } from "types/comments";

export interface ICommentsState {
    comments: ICommentResponse[];
    isLoading: boolean;
    error: string;
}