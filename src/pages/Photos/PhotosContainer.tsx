import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "hooks/redux";
import {
  categorySelector,
  errorSelector,
  getPhotos,
  isLoadingSelector,
  photosSelector,
} from "store/reducers/photos";
import Error from "components/Error";

import Photos from "./Photos";
import PhotosSkeleton from "./PhotosSkeleton";
import { capitalizeFirstLetter } from "./utils";


const PhotosContainer = () => {
  const photos = useAppSelector(photosSelector);
  const category = useAppSelector(categorySelector);
  const isLoading = useAppSelector(isLoadingSelector);
  const error = useAppSelector(errorSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  if (error) return <Error error={error} />;

  const title = capitalizeFirstLetter(category);

  return isLoading ? (
    <PhotosSkeleton />
  ) : (
    <Photos photos={photos} title={title} />
  );
};

export default PhotosContainer;
