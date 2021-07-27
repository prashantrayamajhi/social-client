import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Verify from "./VerifyAccount/VerifyAccount";
import Home from "./Home/Home";
import Profile from "./User/Profile";
import Settings from "./User/Settings";

// Private Route
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const RouterComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/profile" exact component={Profile} />
          <PrivateRoute path="/settings" exact component={Settings} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/verify/:email" exact component={Verify} />
        </Switch>
      </Router>
    </>
  );
};

export default RouterComponent;
