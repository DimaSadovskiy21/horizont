import { data } from "data";
import { ICommentResponse } from "types/comments";
import { IPhotoResponse } from "types/photos";

export const photosApi = {
  getPhotos: (): Promise<IPhotoResponse[]> =>
    new Promise((resolve) => setTimeout(() => resolve(data), 1000)),

  getPhoto: (photoId: string): Promise<IPhotoResponse> =>
    new Promise((resolve) => {
      const photo = [...data].find(({ id }) => id === photoId);
      photo && setTimeout(() => resolve(photo), 1000);
    }),
};

export const commentsApi = {
  getPhotoComments: (photoId: string): Promise<ICommentResponse[]> =>
    new Promise((resolve) => {
      const commentsStorage = localStorage.getItem("comments");
      const comments: ICommentResponse[] = commentsStorage
        ? JSON.parse(commentsStorage)
        : [];
      const photoComments = comments.filter(
        (comment) => comment.photoId === photoId
      );

      setTimeout(() => resolve(photoComments), 1000);
    }),

  createComment: (payload: ICommentResponse): Promise<ICommentResponse[]> =>
    new Promise((resolve) => {
      const commentsStorage = localStorage.getItem("comments");
      const comments: ICommentResponse[] = commentsStorage
        ? JSON.parse(commentsStorage)
        : [];

      localStorage.setItem("comments", JSON.stringify([payload, ...comments]));

      const newCommentsStorage = localStorage.getItem("comments");
      const newComments: ICommentResponse[] = newCommentsStorage
        ? JSON.parse(newCommentsStorage)
        : [];

      const photoComments = newComments.filter(
        (comment) => comment.photoId === payload.photoId
      );

      setTimeout(() => resolve(photoComments), 1000);
    }),
};
