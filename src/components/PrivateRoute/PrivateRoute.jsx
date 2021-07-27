import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkJwtToken } from "./../../helpers/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <>
    {checkJwtToken()}
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") &&
        localStorage.getItem("email") &&
        localStorage.getItem("id") &&
        localStorage.getItem("name") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  </>
);

export default PrivateRoute;
