import { combineReducers } from "redux";
import cardNewFeed from "./cardNewFeed";

const rootReducer = combineReducers({
  cardNewFeed: cardNewFeed,
});

export default rootReducer;
