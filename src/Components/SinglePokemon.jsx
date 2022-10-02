import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid, Container, Paper, Pagination } from "@mui/material";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";

function SinglePokemon() {
  const [pokemon, setPokemon] = useState({});
  const [pokeTypes, setPokeTypes] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [pokeTitle, setPokeTitle] = useState("");
  const [generation, setGen] = useState("");
  const [cardColor, setCardColor] = useState();
  const [flavorText, setFlavorText] = useState("");

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonFromServer = await fetchPokemon();
      console.log(pokemonFromServer);
      setPokemon(pokemonFromServer);
      setPokeTypes(pokemonFromServer.types);
      setAbilities(pokemonFromServer.abilities);

      setCardColor(pokemonFromServer.types[0].type.name);
    };

    const getSpecies = async () => {
      const speciesFromServer = await fetchPokemonSpecies();
      console.log(speciesFromServer);

      setFlavorText(speciesFromServer.flavor_text_entries[0].flavor_text);
      setGen(speciesFromServer.generation.name);
      setPokeTitle(speciesFromServer.genera[7].genus);
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
        maxWidth="xl"
        sx={{
          mt: 14,
        }}
      >
        <Grid container spacing={2}>
          {/* first item: pokemon picture */}
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

          {/* second item: pokemon data */}
          <Grid
            item
            xs={12}
            md={12}
            lg={6}
            sx={{
              display: "flex",
            }}
          >
            <section className="pokemonData">
              <div className="singlePokemonName">{pokemon.name}</div>
              <div>{pokeTitle}</div>

              <div className="pokemonTypes">
                {pokeTypes?.map(function (object, idx) {
                  return (
                    <div
                      className={`singlePokemonTypes ${object.type.name}`}
                      key={idx}
                    >
                      {object.type.name}
                    </div>
                  );
                })}
              </div>

              <div className="dataPage">
                <div className="flavorText">{flavorText}</div>

                <div className="pokemonWeight">Weight: {pokemon.weight}lbs</div>

                <div className="firstAppear">
                  First Appearance: {generation}{" "}
                </div>

                <div className="pokemonAbilitiesContainer">
                  <div className="abilityTitle">Abilities:</div>
                  <div className="pokemonAbilities">
                    {abilities?.map(function (object) {
                      return (
                        <div className="ability">{object.ability.name}</div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SinglePokemon;
