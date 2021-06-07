import styled from "styled-components";
export const StyledDiv = styled.div`
  padding-bottom: 2rem;
  margin-top: 1rem;
`;

export const SquareStyle = styled.div`
  background-color: rgba(
    ${({ red }) => red},
    ${({ green }) => green},
    ${({ blue }) => blue},
    ${({ alpha }) => alpha}
  );
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  width: 300px;
  height: 300px;
  margin-top: 2rem;
  margin-left: 2rem;
`;
