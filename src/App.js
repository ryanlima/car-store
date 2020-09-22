import React from "react";

import { Container, Grid } from "@material-ui/core";

import Header from "./components/Header";

import Routes from "./routes";

function App() {
  return (
    <>
      <Header />
      <Container fixed className="App">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Routes />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
