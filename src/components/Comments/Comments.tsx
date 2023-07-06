import { FC } from "react";

import { MESSAGES } from "constant/messages";

import { ICommentsProps } from "./types";
import {
  Comment,
  CommentsContainer,
  CommentsWrapper,
  Form,
  Submit,
  TextArea,
} from "./styles";
import CommentsSkeleton from "./CommentsSkeleton";

const Comments: FC<ICommentsProps> = ({
  content,
  comments,
  isLoading,
  handleChangeContent,
  handleSubmitNewComment,
}) =>{

  const isDisabled = !content.trim();

  return (
    <CommentsWrapper>
      <Form onSubmit={handleSubmitNewComment}>
        <TextArea value={content} onChange={handleChangeContent} />
        <Submit $isDisabled={isDisabled} disabled={isDisabled}>
          add a comment
        </Submit>
      </Form>
      {isLoading ? (
        <CommentsSkeleton />
      ) : (
        <CommentsContainer>
          {comments.length ? (
            comments.map(({ id, content }) => (
              <Comment key={id}>{content}</Comment>
            ))
          ) : (
            <div>{MESSAGES.NO_COMMENTS}</div>
          )}
        </CommentsContainer>
      )}
    </CommentsWrapper>
  );
} 

export default Comments;
