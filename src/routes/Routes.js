import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import RoutingPath from "./RoutingPath";
import { HomeView } from "../view/homeview/HomeView";
import { HistoryView } from "../view/historyview/HistoryView";
import { SignInView } from "../view/signinview/SignInView";
import { AuthenticationContext } from "../shared/provider/auth";

export const Routes = ({ children }) => {
  const [user] = useContext(AuthenticationContext);

  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exac path={RoutingPath.signInView} component={SignInView} />
        <Route
          exac
          path={RoutingPath.historyview}
          render={() => {
            return user ? (
              <HistoryView />
            ) : (
              <Redirect to={RoutingPath.signInView} />
            );
          }}
        />
        <Route
          path={RoutingPath.homeView}
          render={() => {
            return user ? (
              <HomeView />
            ) : (
              <Redirect to={RoutingPath.signInView} />
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};
