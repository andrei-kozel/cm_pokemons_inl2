import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RoutingPath from "./RoutingPath";
import { HomeView } from "../view/homeview/HomeView";
import { HistoryView } from "../view/historyview/HistoryView";

export const Routes = ({ children }) => (
  <BrowserRouter>
    {children}
    <Switch>
      <Route
        exac
        path={RoutingPath.signInView}
        component={() => <p>SignIn</p>}
      />
      <Route exac path={RoutingPath.historyview} component={HistoryView} />
      <Route path={RoutingPath.homeView} component={HomeView} />
    </Switch>
  </BrowserRouter>
);
