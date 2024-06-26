import { combineReducers } from "redux";
import cakeReducer from "./Cakes/cakeReducer";
import IceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./users/userReducer";
const rootReducer = combineReducers({
  // cake: cakeReducer,
  // iceCream: IceCreamReducer,
  user: userReducer,
});

export default rootReducer;
