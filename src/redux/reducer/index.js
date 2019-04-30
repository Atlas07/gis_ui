import { combineReducers } from "redux";
import auth from "./auth";
import city from "./city";
import education from "./education";

export default combineReducers({
  auth,
  cities: city,
  univercities: education,
});
