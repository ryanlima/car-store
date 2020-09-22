import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ marginBottom: 30 }}>
      <Toolbar>
        <Typography className={classes.root} variant="h6">
          VARTECH
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Ofertas
        </Button>
        <Button color="inherit" component={Link} to="/admin">
          Admin
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
