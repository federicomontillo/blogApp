import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { DashboardRoutes } from "./DashboardRoutes";
import { RoutePrivate } from './RoutePrivate';

import { LoginScreen } from "../components/login/LoginScreen";

export default function AppRouter() {
  return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/login" component= { LoginScreen } />
                <RoutePrivate path="/" component= { DashboardRoutes } />  
            </Switch>
        </div>
    </Router>
  );
};