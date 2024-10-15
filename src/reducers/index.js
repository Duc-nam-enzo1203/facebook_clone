import { combineReducers } from "redux";
import cardNewFeed from "./cardNewFeed";
import currentUser from "./currentUser";

const rootReducer = combineReducers({
  cardNewFeed: cardNewFeed,
  currentUser: currentUser,
});

export default rootReducer;
