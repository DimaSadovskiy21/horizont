import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { IPhotoProps } from "./types";
import { Image, Overline, PhotoWrapper } from "./styles";


const Photo: FC<IPhotoProps> = ({ id ,imgUrl, title }) => {

  const navigate = useNavigate()

  const handleClickNavigatePhoto = () => navigate(id);

  return (
    <PhotoWrapper onClick={handleClickNavigatePhoto}>
      <Image src={imgUrl} alt={title} />
      <Overline>show more...</Overline>
    </PhotoWrapper>
  );
} 

export default Photo;
