import { FC } from "react";

import {
  ErrorWrapper,
  ErrorDescription,
  ErrorVector,
  ErrorTitle,
} from "./styles";
import { IErrorProps } from "./types";

const Error: FC<IErrorProps> = ({ error }) => (
  <ErrorWrapper>
    <ErrorVector />
    <ErrorTitle>Error!</ErrorTitle>
    <ErrorDescription>{error}</ErrorDescription>
  </ErrorWrapper>
);

export default Error;
