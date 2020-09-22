import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

import { formatNumber } from "../../utils/numberFormat";
import { GlobalContext } from "../../context/GlobalState/GlobalState";

import { getOffers } from "../../services/firestore";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    padding: 20,
  },
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
});

function createData(id, marca, modelo, ano, preco, views) {
  return { id, marca, modelo, ano, preco, views };
}

const rows = [
  createData(1, "Chevrolet", "1.4 Turbo Ecotec", 2020, 240000, 4),
  createData(2, "Chevrolet", "1.4 Turbo Ecotec", 2020, 240000, 4),
  createData(3, "Chevrolet", "1.4 Turbo Ecotec", 2020, 240000, 4),
  createData(4, "Chevrolet", "1.4 Turbo Ecotec", 2020, 240000, 4),
  createData(5, "Chevrolet", "1.4 Turbo Ecotec", 2020, 240000, 4),
  createData(6, "Chevrolet", "1.4 Turbo Ecotec", 2020, 240000, 4),
];

const Admin = () => {
  const { offers, removeOffer, editOffer } = useContext(GlobalContext);
  const [offers2, setOffers] = React.useState([]);
  const classes = useStyles();

  React.useEffect(() => {
    const getData = async () => {
      const result = await getOffers();
      console.log("result", result);
      setOffers(result);
    };
    getData();
    console.log(offers2);
  }, []);

  return (
    <TableContainer style={{ marginTop: 30 }} component={Paper}>
      <div className={classes.root}>
        <Typography variant="h3">Administração</Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/create"
        >
          Adicionar Oferta
        </Button>
      </div>
      <Table className={classes.table} aria-label="car table">
        <TableHead>
          <TableRow>
            <TableCell>Marca</TableCell>
            <TableCell align="center">Modelo</TableCell>
            <TableCell align="center">Ano</TableCell>
            <TableCell align="center">Preço</TableCell>
            <TableCell align="center">Visualizações</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.marca}
              </TableCell>
              <TableCell align="center">{row.modelo}</TableCell>
              <TableCell align="center">{row.ano}</TableCell>
              <TableCell align="center">{formatNumber(row.preco)}</TableCell>
              <TableCell align="center">{row.views}</TableCell>
              <TableCell align="center">
                <Button
                  variant="outlined"
                  color="secondary"
                  component={Link}
                  to="/edit"
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to={`/delete/${row.id}`}
                >
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Admin;
