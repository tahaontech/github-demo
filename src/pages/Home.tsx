import React, { useState } from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import DialogSearch from "../features/SearchDialog";

const Home = () => {

  // dialog prop
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
    >
      <Grid
        container
        direction="column"
        sx={{
          backgroundColor: "rgba(0,0,0,0.3)",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.70)"
        }}
      >
        <Grid item>
          <Typography color={"whitesmoke"}>Home Page</Typography>
        </Grid>
        <Grid item sx={{ marginTop: "15px" }}>
          <Button sx={{ minWidth: "200px"}} variant="contained" color="secondary" onClick={handleClickOpen}>
            search a user
          </Button>
        </Grid>
        <Grid item sx={{ marginTop: "15px" }}>
          <Button sx={{ minWidth: "200px"}} variant="contained" color="secondary">
            most popular users
          </Button>
        </Grid>
      </Grid>
      <DialogSearch open={open} handleClose={handleClose} />
    </Box>
  );
};

export default Home;
