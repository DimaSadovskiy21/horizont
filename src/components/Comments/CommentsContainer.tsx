import { ChangeEvent, FC, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "hooks/redux";
import {
  commentsSelector,
  createComment,
  getPhotoComments,
  isLoadingSelector,
} from "store/reducers/comments";

import { ICommentsContainerProps } from "./types";
import Comments from "./Comments";

const CommentsContainer: FC<ICommentsContainerProps> = ({ photoId }) => {
  const comments = useAppSelector(commentsSelector);
  const isLoading = useAppSelector(isLoadingSelector);

  const [content, setContent] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhotoComments(photoId));
  }, [dispatch, photoId]);

  const handleChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(event.currentTarget.value);

  const handleSubmitNewComment = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      createComment({
        id: crypto.randomUUID(),
        content: content.trim(),
        photoId,
      })
    );
    setContent("");
  };

  return (
    <Comments
      content={content}
      comments={comments}
      isLoading={isLoading}
      handleChangeContent={handleChangeContent}
      handleSubmitNewComment={handleSubmitNewComment}
    />
  );
};

export default CommentsContainer;
