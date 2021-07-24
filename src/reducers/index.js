import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import alerts from "./alert";

export default combineReducers({ posts, auth, alerts });
