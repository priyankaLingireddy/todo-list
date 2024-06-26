import { BUY_ICE_CREAM } from "./iceCreamType";

const initialstate = {
  numberOfIceCreams: 20,
};

const IceCreamReducer = (state = initialstate, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    default:
      return state;
  }
};
export default IceCreamReducer;
