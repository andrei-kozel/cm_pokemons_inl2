import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import RoutingPath from "./RoutingPath";
import { HomeView } from "../view/homeview/HomeView";
import { HistoryView } from "../view/historyview/HistoryView";
import { SignInView } from "../view/signinview/SignInView";
import { AuthenticationContext } from "../shared/provider/auth";
import { NotFoundView } from "../view/notfoundview/NotFoundView";
import { PokemonView } from "../view/pokemon/PokemonView";

export const Routes = ({ children }) => {
  const [user] = useContext(AuthenticationContext);

  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path={RoutingPath.signInView} component={SignInView} />
        <Route
          exact
          path={RoutingPath.historyView}
          render={() => {
            return user ? (
              <HistoryView />
            ) : (
              <Redirect to={RoutingPath.signInView} />
            );
          }}
        />
        <Route
          exact
          path={RoutingPath.pokemonView}
          render={() => {
            return user ? (
              <PokemonView />
            ) : (
              <Redirect to={RoutingPath.signInView} />
            );
          }}
        />
        <Route
          exact
          path={RoutingPath.homeView}
          render={() => {
            return user ? (
              <HomeView />
            ) : (
              <Redirect to={RoutingPath.signInView} />
            );
          }}
        />

        {/* Fallback route */}
        <Route component={NotFoundView} />
      </Switch>
    </BrowserRouter>
  );
};
