import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";

const App = () => {
  return (
    <div className="container mx-auto p-4 center">
      <Router>
        <Switch>
          {/* init redirect wont stay here */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* end init */}
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
