import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Verify from "./VerifyAccount/VerifyAccount";
import Home from "./Home/Home";

// Private Route
import PrivateRoute from './PrivateRoute/PrivateRoute'

const RouterComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/verify/:email" exact component={Verify} />
        </Switch>
      </Router>
    </>
  );
};

export default RouterComponent;
