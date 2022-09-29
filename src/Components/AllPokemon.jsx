import React from "react";
import { Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

function AllPokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonFromServer = await fetchPokemon();
      setPokemon(pokemonFromServer);
    };
    getPokemon();
  }, [pokemon]);

  const fetchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/1/
    `);

    const data = await res.json();
    return data;
  };
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          mt: 4,
        }}
      >
        <Grid container spacing={3}>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      </Container>
    </>
  );
}

export default AllPokemon;
