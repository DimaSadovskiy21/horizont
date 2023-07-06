import { FC } from "react";

import Photo from "components/Photo";
import Filters from "components/Filters";

import { IPhotosProps } from "./types";
import { PhotosContainer, PhotosWrapper, Title } from "./styles";

const Photos: FC<IPhotosProps> = ({ photos, title }) => (
  <PhotosWrapper>
    <Title>{title}</Title>
    <Filters />
    <PhotosContainer>
      {photos.map((photo) => (
        <Photo key={photo.id} {...photo} />
      ))}
    </PhotosContainer>
  </PhotosWrapper>
);

export default Photos;
