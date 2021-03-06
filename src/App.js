import React from "react";

import { Container, Grid } from "@material-ui/core";

import Header from "./components/Header";
import Routes from "./routes";

import { GlobalProvider } from "./context/GlobalState/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Container fixed className="App">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Routes />
          </Grid>
        </Grid>
      </Container>
    </GlobalProvider>
  );
}

export default App;
