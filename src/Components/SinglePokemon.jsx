import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid, Container, Paper } from "@mui/material";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";

function SinglePokemon() {
  const [pokemon, setPokemon] = useState({});
  const [pokeTypes, setPokeTypes] = useState([]);
  const [cardColor, setCardColor] = useState();

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonFromServer = await fetchPokemon();
      console.log(pokemonFromServer);
      setPokemon(pokemonFromServer);
      setPokeTypes(pokemonFromServer.types);
      setCardColor(pokemonFromServer.types[0].type.name);
    };
    getPokemon();
  }, []);
  const params = useParams();

  const fetchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}
    `);

    const data = res.json();
    return data;
  };
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          mt: 12,
        }}
      >
        <Paper>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="cardHover"
            >
              <div className={`pokemonDisplayCard ${cardColor}`}>
                <span
                  className="pokemonImageDisplay"
                  style={{
                    backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png")`,
                  }}
                ></span>
                <div className="pokeNumberDecor">#{params.id}</div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{
                display: "flex",
              }}
            >
              <div>{pokemon.name}</div>
              <br />
              <div>wt: {pokemon.weight}</div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default SinglePokemon;
