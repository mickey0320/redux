import { combineReducers } from "../../redux";

import moduleA from "./a";
import moduleB from "./b";

export default combineReducers({
  moduleA,
  moduleB,
});
