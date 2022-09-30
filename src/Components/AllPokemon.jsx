import React from "react";
import { Container, Grid } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import PokemonCard from "./PokemonCard";

function AllPokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [pokeCount, setPokeCount] = useState(0);

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonFromServer = await fetchPokemon();
      setPokemons(pokemonFromServer.results);
      console.log(pokemons);
    };
    getPokemon();
    console.log(pokeCount, pokemons);
  }, [pokeCount]);

  const fetchPokemon = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${pokeCount}&limit=21`
    );
    const data = await res.json();

    return data;
  };

  const handlePrevious = () => {
    console.log("previous page");
  };

  const handleNextPage = async (e) => {
    e.preventDefault();
    setPokeCount(pokeCount + 21);
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
          {pokemons.map(function (pokemon, idx) {
            return <PokemonCard key={idx} pokemon={pokemon} />;
          })}
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="buttons">
              <button onClick={handlePrevious} className="previousButton">
                previous
              </button>
              <button onClick={handleNextPage} className="nextButton">
                next
              </button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AllPokemon;
