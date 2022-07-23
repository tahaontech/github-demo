import React from "react";
import logo from "../assets/Git.png";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Grid
      container
      direction="row"
      rowSpacing={1}
      justifyContent="center"
      alignItems="center"
      sx={{
        color: "white",
      }}
    >
      <Grid item xs={2}>
        <img width="50px" alt="Remy Sharp" src={logo} />
      </Grid>
      <Grid item xs={2}>
        <Button >
          <Link style={{ color: "white" }} to="/github-demo/">Home</Link>{" "}
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button sx={{ color: "white" }}>
          <Link style={{ color: "white" }} to="/github-demo/MostPopulars">Most Popular</Link>{" "}
        </Button>
      </Grid>
    </Grid>
  );
};

export default NavBar;
