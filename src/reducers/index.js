import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import alerts from "./alert";
import profile from "./profile";
import follow from "./follow";

export default combineReducers({ posts, auth, alerts, profile, follow });
