import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, Button } from "@material-ui/core";
import { GlobalContext } from "../../context/GlobalState/GlobalState";
import { useHistory, Link } from "react-router-dom";
import { createOffer } from "../../services/firestore";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
  },
  form: {
    padding: "0 30px",
    // textAlign: "center",
  },
  row: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const Create = () => {
  const classes = useStyles();

  const initialState = {
    marca: "chevo",
    modelo: "2.4",
    ano: "2019",
    preco: "23456",
    cor: "preto",
    quilometragem: "23km",
    placa: "2342323",
    cidade: "fortal",
    fotos:
      "https://media.gazetadopovo.com.br/2020/01/17155825/lamborghini-huracan-Alexander-Migl-wikimedia-commons-960x540.jpg",
  };
  const [offer, setOffer] = React.useState(initialState);

  const { addOffer, offers } = React.useContext(GlobalContext);
  let history = useHistory();

  const handleOnChange = (e) => {
    setOffer({ ...offer, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const result = createOffer(offer);
    if (result) {
      console.log("ok", result);
      setOffer("");
      history.push("/admin");
    }
  };
  return (
    <div className={classes.root}>
      <h1>Criar Oferta</h1>
      <form onSubmit={handleOnSubmit} className={classes.form}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <TextField
              label="Marca"
              name="marca"
              fullWidth
              variant="outlined"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Modelo"
              name="modelo"
              fullWidth
              variant="outlined"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Ano"
              name="ano"
              fullWidth
              variant="outlined"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Preço"
              name="preco"
              fullWidth
              variant="outlined"
              onChange={handleOnChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <TextField
              label="Cor"
              name="cor"
              fullWidth
              variant="outlined"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Quilometragem"
              name="quilometragem"
              fullWidth
              variant="outlined"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Placa"
              name="placa"
              fullWidth
              variant="outlined"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Cidade"
              name="cidade"
              fullWidth
              variant="outlined"
              onChange={handleOnChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <TextField
              label="Fotos"
              name="fotos"
              fullWidth
              variant="outlined"
              onChange={handleOnChange}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" justify="flex-end">
          <Button
            color="secondary"
            size="large"
            component={Link}
            to="/admin"
            variant="contained"
          >
            Voltar
          </Button>
          <Button
            type="submit"
            color="primary"
            size="large"
            variant="contained"
          >
            Cadastrar
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default Create;
