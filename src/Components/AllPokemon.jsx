import React from "react";
import { Container, Grid } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import PokemonCard from "./PokemonCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function AllPokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    `https://pokeapi.co/api/v2/pokemon/`
  );
  const [nextPageURL, setNextPageURL] = useState();
  const [previousPageURL, setPreviousPageURL] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getPokemon = async () => {
      const pokemonFromServer = await fetchPokemon();
      setLoading(false);

      setPokemons(pokemonFromServer.results);
      setNextPageURL(pokemonFromServer.next);
      setPreviousPageURL(pokemonFromServer.previous);
    };
    getPokemon();
  }, [currentPage]);

  const fetchPokemon = async () => {
    const res = await fetch(currentPage);
    const data = await res.json();
    return data;
  };

  const handlePrevious = () => {
    setCurrentPage(previousPageURL);
  };

  const handleNextPage = async () => {
    setCurrentPage(nextPageURL);
  };

  if (loading) {
    return <h1 className="loadingScreen">app is loading</h1>;
  }

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          mt: 12,
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
                <ArrowBackIcon />
                Previous
              </button>
              <button onClick={handleNextPage} className="nextButton">
                Next
                <ArrowForwardIcon />
              </button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AllPokemon;
