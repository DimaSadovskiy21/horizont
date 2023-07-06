import { ChangeEvent } from "react";
import { ICommentResponse } from "types/comments";

export interface ICommentsProps {
  content: string;
  comments: ICommentResponse[];
  isLoading: boolean;
  handleChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmitNewComment: (event: ChangeEvent<HTMLFormElement>) => void;
}

export interface ICommentsContainerProps {
  photoId: string;
}

export interface ISubmitStyledProps {
  $isDisabled: boolean;
}