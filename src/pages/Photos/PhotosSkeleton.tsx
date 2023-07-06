import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { SCREENS } from "constant/screens";

import { PhotosContainer, PhotosWrapper } from "./styles";

const PhotosSkeleton = () => {
  const [isMobile, setIsMobile] = useState(true);

  const handleResize = () =>
    window.innerWidth < SCREENS.MOBILE ? setIsMobile(true) : setIsMobile(false);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PhotosWrapper>
      <Skeleton width={150} height={20} />
      <Skeleton width={300} height={20} />
      <PhotosContainer>
        {Array(9)
          .fill(0)
          .map((_element, index) =>
            isMobile ? (
              <Skeleton key={index} width={300} height={200} />
            ) : (
              <Skeleton key={index} width={400} height={300} />
            )
          )}
      </PhotosContainer>
    </PhotosWrapper>
  );
};

export default PhotosSkeleton;
