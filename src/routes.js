import React from "react";

import { Switch, Route } from "react-router-dom";

import { Paper } from "@material-ui/core";

import Admin from "./pages/Admin";
import Main from "./pages/Main";
import Create from "./pages/Create";
// import Show from "./pages/Show";
import Edit from "./pages/Edit";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/admin">
        <Paper>
          <Admin />
        </Paper>
      </Route>
      <Route path="/create">
        <Paper>
          <Create />
        </Paper>
      </Route>
      <Route path="/edit/:id">
        <Paper>
          <Edit />
        </Paper>
      </Route>
    </Switch>
  );
};

export default Routes;
