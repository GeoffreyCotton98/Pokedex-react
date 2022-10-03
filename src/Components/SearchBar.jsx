import React from "react";
import Textfield from "@mui/material/TextField";
import GenSelect from "./GenSelect";
import { useNavigate } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
        toast.error("Pokemon not found");
        throw new Error(res.status);
      } else {
        const data = res.json();
        return data;
      }
    };

    const searchForPokemon = async () => {
      const pokemonFromSearch = await getPokemon();
      setPokemon(pokemonFromSearch);
      navigate(`/Pokemon/${pokemonFromSearch.id}`);
    };

    searchForPokemon();

    setSearch("");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <nav className="nav">
        <Grid container spacing={1}>
          <Grid item xs={9} md={9} lg={9}>
            <Textfield
              fullWidth
              value={searchedPokemon}
              onChange={handleChange}
              id="outlined-basic"
              label="Search Pokemon"
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            xs={3}
            md={3}
            lg={3}
            sx={{
              display: "flex",
            }}
          >
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
