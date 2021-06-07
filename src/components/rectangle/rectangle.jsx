import React from "react";
import { RectangleStyle, StyledDiv } from "./rectangle.style";

const Rectangle = ({ data, onChange }) => {
  return (
    <div>
      <StyledDiv>
        <input
          type="range"
          name="hue"
          value={data.hue}
          onChange={onChange}
          min="0"
          max="360"
        />
      </StyledDiv>
      <StyledDiv>
        <input
          type="range"
          name="saturation"
          value={data.saturation}
          onChange={onChange}
          min="0"
          max="100"
        />
      </StyledDiv>
      <StyledDiv>
        <input
          type="range"
          name="luminosity"
          value={data.luminosity}
          onChange={onChange}
          min="0"
          max="100"
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

      <RectangleStyle
        rotation={data.rotation}
        luminosity={data.luminosity}
        saturation={data.saturation}
        hue={data.hue}
      />
    </div>
  );
};

export default Rectangle;
