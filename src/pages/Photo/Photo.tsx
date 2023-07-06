import { FC } from "react";

import Comments from "components/Comments";

import { IPhotoProps } from "./types";
import {
  Description,
  GoBack,
  Image,
  PhotoContainer,
  PhotoWrapper,
  Title,
} from "./styles";

const Photo: FC<IPhotoProps> = ({
  id,
  title,
  imgUrl,
  description,
  handleGoBackClick,
}) => (
  <PhotoWrapper>
    <GoBack onClick={handleGoBackClick}>go back</GoBack>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <PhotoContainer>
      <Image src={imgUrl} alt={title} />
      <Comments photoId={id} />
    </PhotoContainer>
  </PhotoWrapper>
);

export default Photo;
