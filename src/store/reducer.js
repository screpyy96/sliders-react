export const initialState = {
  red: 0,
  green: 0,
  blue: 0,
  alpha: 1,
  rotation: 0,
  hue: 0,
  saturation: 0,
  luminosity: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.property]: action.value,
      };

    default:
      return state;
  }
};

export const changeAction = (string, numar) => ({
  type: "CHANGE",
  property: string,
  value: +numar,
});
