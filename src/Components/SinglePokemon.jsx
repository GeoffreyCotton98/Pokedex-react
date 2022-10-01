import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid, Container, Paper } from "@mui/material";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";
import { minHeight } from "@mui/system";

function SinglePokemon() {
  const [pokemon, setPokemon] = useState({});
  const [pokeTypes, setPokeTypes] = useState([]);
  const [cardColor, setCardColor] = useState();
  const [flavorText, setFlavorText] = useState("");

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonFromServer = await fetchPokemon();
      console.log(pokemonFromServer);
      setPokemon(pokemonFromServer);
      setPokeTypes(pokemonFromServer.types);
      setCardColor(pokemonFromServer.types[0].type.name);
    };

    const getSpecies = async () => {
      const speciesFromServer = await fetchPokemonSpecies();
      console.log(speciesFromServer);
      setFlavorText(speciesFromServer.flavor_text_entries[0].flavor_text);
    };
    getPokemon();
    getSpecies();
  }, []);
  const params = useParams();

  const fetchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}
    `);

    const data = res.json();
    return data;
  };

  const fetchPokemonSpecies = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${params.id}/`
    );

    const data = res.json();
    return data;
  };
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          mt: 14,
        }}
      >
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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className="singlePokemonName">{pokemon.name}</div>

                <div className="pokemonTypes">
                  {pokeTypes?.map(function (object, idx) {
                    return (
                      <div className="singlePokemonTypes" key={idx}>
                        {object.type.name}
                      </div>
                    );
                  })}
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>{flavorText}</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SinglePokemon;
