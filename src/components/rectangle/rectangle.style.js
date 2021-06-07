import styled from "styled-components";

export const RectangleStyle = styled.div`
  background-color: hsla(
    ${({ hue }) => hue},
    ${({ saturation }) => `${saturation}%`},
    ${({ luminosity }) => `${luminosity}%`}
  );
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  width: 300px;
  height: 150px;
  margin-top: 8rem;
`;

export const StyledDiv = styled.div`
  padding-bottom: 2rem;
  margin-top: 1rem;
`;
