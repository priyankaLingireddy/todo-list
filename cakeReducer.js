import { BUY_CAKE } from "./cakeTypes";
const initialstate = {
  numberOfCakes: 10,
};
const cakeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};
export default cakeReducer;
