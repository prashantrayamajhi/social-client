import { combineReducers } from "redux";

import posts from "./posts";
import post from "./post";
import auth from "./auth";
import alerts from "./alert";
import profile from "./profile";
import follow from "./follow";

export default combineReducers({ posts, post, auth, alerts, profile, follow });
