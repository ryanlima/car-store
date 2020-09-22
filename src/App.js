import React from "react";

import { Switch, Route } from "react-router-dom";

import { Container, Grid, Paper } from "@material-ui/core";

import Header from "./components/Header";
import Admin from "./pages/Admin";
import Main from "./pages/Main";
import Create from "./pages/Create";
import Show from "./pages/Show";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <Header />
      <Container fixed className="App">
        <Grid container spacing={3}>
          <Grid item xs={12}>
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
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
