import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.root} variant="h6">
          VARTECH
        </Typography>
        <Button color="inherit">Ofertas</Button>
        <Button color="inherit">Admin</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
