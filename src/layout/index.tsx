import React from "react";
import { Grid, Container } from "@mui/material";
import NavBar from "../components/NavBar";

type props = {
  children: JSX.Element;
};

const Layout = ({ children }: props) => {
  return (
    <Container maxWidth="sm">
      <NavBar />
      <Grid
        container
        direction="row" justifyContent="center" alignItems="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {children}
      </Grid>
    </Container>
  );
};

export default Layout;
