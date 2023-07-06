import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { SCREENS } from "constant/screens";

import {
  CommentsWrapperSkeleton,
  PhotoContainer,
  PhotoWrapper,
} from "./styles";

const PhotosSkeleton = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [isTablet, setIsTablet] = useState(true);

  const handleResize = () => {
    window.innerHeight < SCREENS.TABLET
      ? setIsTablet(true)
      : setIsTablet(false);
    window.innerWidth < SCREENS.MOBILE ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PhotoWrapper>
      <Skeleton width={200} height={20} />
      {isTablet ? (
        <Skeleton width={300} height={40} />
      ) : (
        <Skeleton width={600} height={40} />
      )}
      {isMobile ? (
        <PhotoContainer>
          <Skeleton width={300} height={200} />
          <div>
            <Skeleton width={300} height={70} />
            <Skeleton width={300} height={30} />
            <CommentsWrapperSkeleton>
              <Skeleton width={300} height={40} />
              <Skeleton width={300} height={40} />
              <Skeleton width={300} height={40} />
              <Skeleton width={300} height={40} />
              <Skeleton width={300} height={40} />
              <Skeleton width={300} height={40} />
            </CommentsWrapperSkeleton>
          </div>
        </PhotoContainer>
      ) : (
        <PhotoContainer>
          <Skeleton width={400} height={400} />
          <div>
            <Skeleton width={400} height={70} />
            <Skeleton width={400} height={30} />
            <CommentsWrapperSkeleton>
              <Skeleton width={400} height={40} />
              <Skeleton width={400} height={40} />
              <Skeleton width={400} height={40} />
              <Skeleton width={400} height={40} />
              <Skeleton width={400} height={40} />
              <Skeleton width={400} height={40} />
            </CommentsWrapperSkeleton>
          </div>
        </PhotoContainer>
      )}
    </PhotoWrapper>
  );
};

export default PhotosSkeleton;
