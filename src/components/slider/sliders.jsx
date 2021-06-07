import React, { useReducer } from "react";
import { Router } from "@reach/router";

import Rectangle from "../rectangle";
import Square from "../square";
import { changeAction, initialState, reducer } from "../../store/reducer";
import { StyledLink } from "./sliders.style";

const Sliders = () => {
  const [state, setState] = useReducer(reducer, initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState(changeAction(name, value));
  };

  return (
    <>
      <StyledLink to="/">Square</StyledLink>
      <StyledLink to="/rectangle">Rectangle</StyledLink>
      <Router>
        <Square path="/" data={state} onChange={onChange} />
        <Rectangle path="rectangle" data={state} onChange={onChange} />
      </Router>
    </>
  );
};

export default Sliders;
