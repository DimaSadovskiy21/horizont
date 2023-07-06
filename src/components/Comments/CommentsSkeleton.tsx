import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { CommentsContainer } from "./styles";
import { useEffect, useState } from "react";
import { SCREENS } from "constant/screens";

const CommentsSkeleton = () => {
  const [isMobile, setIsMobile] = useState(true);


  const handleResize = () => {
    window.innerWidth < SCREENS.MOBILE ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile ? (
    <CommentsContainer>
      <Skeleton width={300} height={40} />
      <Skeleton width={300} height={40} />
      <Skeleton width={300} height={40} />
      <Skeleton width={300} height={40} />
      <Skeleton width={300} height={40} />
      <Skeleton width={300} height={40} />
    </CommentsContainer>
  ) : (
    <CommentsContainer>
      <Skeleton width={400} height={40} />
      <Skeleton width={400} height={40} />
      <Skeleton width={400} height={40} />
      <Skeleton width={400} height={40} />
      <Skeleton width={400} height={40} />
      <Skeleton width={400} height={40} />
    </CommentsContainer>
  );
};

export default CommentsSkeleton;
