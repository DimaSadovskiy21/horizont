import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "hooks/redux";
import Error from "components/Error";
import {
  errorSelector,
  getPhoto,
  isLoadingSelector,
  photoSelector,
} from "store/reducers/photos";
import { errorSelector as errorCommentsSelector } from "store/reducers/comments";

import Photo from "./Photo";
import PhotosSkeleton from "./PhotoSkeleton";

const PhotoContainer = () => {
  const photo = useAppSelector(photoSelector);
  const isLoading = useAppSelector(isLoadingSelector);
  const error = useAppSelector(errorSelector);
  const errorComments = useAppSelector(errorCommentsSelector);

  const dispatch = useAppDispatch();

  const { id } = useParams();

  const navigate = useNavigate();

  const handleGoBackClick = () => navigate(-1);

  useEffect(() => {
    id && dispatch(getPhoto(id));
  }, [dispatch, id]);

  if (error || errorComments) return <Error error={error} />;

  return isLoading ? (
    <PhotosSkeleton />
  ) : (
    <Photo handleGoBackClick={handleGoBackClick} {...photo} />
  );
};

export default PhotoContainer;
