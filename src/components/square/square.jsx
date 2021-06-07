import React from "react";
import { SquareStyle, StyledDiv } from "./square.style";

const Square = ({ data, onChange }) => {
  return (
    <>
      <div>
        <StyledDiv>
          <input
            type="range"
            name="red"
            value={data.red}
            onChange={onChange}
            min="1"
            max="255"
          />
        </StyledDiv>
        <StyledDiv>
          <input
            type="range"
            name="green"
            value={data.green}
            onChange={onChange}
            min="1"
            max="255"
          />
        </StyledDiv>
        <StyledDiv>
          <input
            type="range"
            name="blue"
            value={data.blue}
            onChange={onChange}
            min="1"
            max="255"
          />
        </StyledDiv>
        <StyledDiv>
          <input
            type="range"
            name="alpha"
            value={data.alpha}
            onChange={onChange}
            min="0"
            max="1"
            step="0.1"
          />
        </StyledDiv>
        <StyledDiv>
          <input
            type="range"
            name="rotation"
            value={data.rotation}
            onChange={onChange}
            min="1"
            max="255"
          />
        </StyledDiv>
        <SquareStyle
          red={data.red}
          green={data.green}
          blue={data.blue}
          alpha={data.alpha}
          rotation={data.rotation}
        />
      </div>
    </>
  );
};

export default Square;
