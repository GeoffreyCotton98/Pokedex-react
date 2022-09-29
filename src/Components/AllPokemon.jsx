import React from "react";
import { Container, Grid } from "@mui/material";

function AllPokemon() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          mt: 4,
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <div className="pokemonCard"></div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div className="pokemonCard"></div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div className="pokemonCard"></div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AllPokemon;
