// components/Typography.js
import styled from "@emotion/styled";
import { typography, space, color } from "styled-system";

const Heading = styled.h1`
  ${typography}
  ${space}
  ${color}
`;

const Paragraph = styled.p`
  ${typography}
  ${space}
  ${color}
`;

export { Heading, Paragraph };
