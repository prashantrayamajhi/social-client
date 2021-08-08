import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Verify from "./VerifyAccount/VerifyAccount";
import Home from "./Home/Home";
import Profile from "./User/Profile";
import Followers from "./User/Followers";
import Following from "./User/Following";
import Settings from "./User/Settings/Settings";
import PostDetails from "./Post/PostDetails";

// Private Route
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const RouterComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/:id" exact component={PostDetails} />
          <PrivateRoute path="/profile/:id" exact component={Profile} />
          <PrivateRoute path="/settings" exact component={Settings} />
          <PrivateRoute path="/followers/:id" exact component={Followers} />
          <PrivateRoute path="/following/:id" exact component={Following} />
          <Route path="/verify/:email" exact component={Verify} />
        </Switch>
      </Router>
    </>
  );
};

export default RouterComponent;
