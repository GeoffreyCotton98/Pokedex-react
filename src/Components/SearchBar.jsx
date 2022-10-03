import React from "react";
import Textfield from "@mui/material/TextField";
import GenSelect from "./GenSelect";
import { useNavigate } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import { useEffect, useState } from "react";

function SearchBar() {
  const [searchedPokemon, setSearch] = useState("");
  const [pokemon, setPokemon] = useState({});

  const navigate = useNavigate();

  const requestPokemonSearch = async () => {
    const getPokemon = async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchedPokemon.toLowerCase()}`
      );
      if (!res.ok) {
        window.alert("pokemon not found");
        return;
      } else {
        const data = res.json();
        console.log(data);
        return data;
      }
    };
    const searchForPokemon = async () => {
      const pokemonFromSearch = await getPokemon();
      setPokemon(pokemonFromSearch);
      navigate(`/Pokemon/${pokemonFromSearch.id}`);
    };

    searchForPokemon();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <nav className="nav">
        <Grid container spacing={1}>
          <Grid item xs={8} md={8} lg={8}>
            <Textfield
              fullWidth
              value={searchedPokemon}
              onChange={handleChange}
              id="outlined-basic"
              label="Search Pokemon"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={2} md={2} lg={2}>
            <Button variant="contained" onClick={requestPokemonSearch}>
              Submit
            </Button>
            {/* <GenSelect /> */}
          </Grid>
        </Grid>
      </nav>
    </>
  );
}

export default SearchBar;
