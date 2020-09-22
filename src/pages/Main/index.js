import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CardCar from "../../components/CardCar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: 30,
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <CardCar />
        </Grid>
        <Grid item xs={3}>
          <CardCar />
        </Grid>
        <Grid item xs={3}>
          <CardCar />
        </Grid>
        <Grid item xs={3}>
          <CardCar />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <CardCar />
        </Grid>
        <Grid item xs={3}>
          <CardCar />
        </Grid>
        <Grid item xs={3}>
          <CardCar />
        </Grid>
        <Grid item xs={3}>
          <CardCar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
