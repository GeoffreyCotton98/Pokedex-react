import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid, Container, Paper, Pagination } from "@mui/material";

import PokeData from "./PokeData";

function SinglePokemon() {
  const [pokemon, setPokemon] = useState({});
  const [pokeTypes, setPokeTypes] = useState([]);
  const [pokeStats, setStats] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [pokeTitle, setPokeTitle] = useState("");
  const [generation, setGen] = useState("");
  const [cardColor, setCardColor] = useState();
  const [flavorText, setFlavorText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonFromServer = await fetchPokemon();
      console.log(pokemonFromServer.stats);
      setPokemon(pokemonFromServer);
      setPokeTypes(pokemonFromServer.types);
      setStats(pokemonFromServer.stats);
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

  const handleOverview = () => {
    setCurrentPage(1);
  };
  const handleStats = () => {
    setCurrentPage(2);
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
          <Grid item xs={12} md={12} lg={6}>
            <section className="pokemonData">
              <div className="singlePokemonName">{pokemon.name}</div>
              <div>The {pokeTitle}</div>

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
              <PokeData
                currentPage={currentPage}
                pokemon={pokemon}
                pokeTitle={pokeTitle}
                pokeTypes={pokeTypes}
                pokeStats={pokeStats}
                flavorText={flavorText}
                generation={generation}
                abilities={abilities}
              />
              <div className="pageButtons">
                <div className="pageButton" onClick={handleOverview}>
                  Overview
                </div>
                <div className="pageButton" onClick={handleStats}>
                  Base Stats
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
