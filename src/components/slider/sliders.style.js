import { Link } from "@reach/router";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  background-color: #3f51b5;
  color: white;
  text-decoration: none;
  margin-right: 1rem;
  padding: 10px;
  font-size: 2rem;
  border-radius: 10px;
  && {
    padding-top: 1rem;
  }
`;
