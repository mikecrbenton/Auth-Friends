import React from "react";
import { Route, Redirect } from "react-router-dom";

/*
  Private Route rules:
  1. It has the same API as <Route />. - needs to match the same props as the replaced component
  2. It renders a <Route /> and passes all the props through to it.
  3. It checks if the user is authenticated, if they are, it renders the “component” prop. If not, it redirects the user to /login.
*/

// rest operator (looks a lot like spread operator)
//GasPrices ,  ...all the rest of the props

// FUNCTION           
// <deference>  component needs to be separated, THEN ...rest of the props
const PrivateRoute = ({ component: Component, ...rest }) => {
  // const Component = component;
  const token = window.localStorage.getItem("token");

  //RETURNS A <ROUTE> COMPONENT
  return (
    <Route {...rest}  // rest operator takes an object and destructure it, and rebuild it
      // render prop that returns a component
      render={ (props) => {
        if (token) {
          // return the component
          return <Component {...props} />;
        } else {
          // redirect the user to /login
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
