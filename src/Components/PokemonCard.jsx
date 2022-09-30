import React from "react";
import { Grid } from "@mui/material";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";
import { useState, useEffect } from "react";

function PokemonCard({ pokemon }) {
  const [pokeData, setPokeData] = useState([]);
  const [pokeTypes, setPokeTypes] = useState([]);
  const [cardColor, setCardColor] = useState();

  useEffect(() => {
    const getPokeData = async () => {
      const pokeDataFromServer = await fetchPokeData();
      setPokeData(pokeDataFromServer);
      setPokeTypes(pokeDataFromServer.types);
      setCardColor(pokeDataFromServer.types[0].type.name);
    };

    getPokeData();
  }, []);

  const fetchPokeData = async () => {
    const res = await fetch(pokemon.url);

    const data = await res.json();

    return data;
  };
  return (
    <>
      <Grid item xs={12} md={6} lg={4} className={"hoverBox"}>
        <div className={`pokemonCard ${cardColor} `}>
          <Grid
            container
            sx={{
              mt: 8,
            }}
          >
            <Grid item xs={6} md={6} lg={6}>
              <Grid container spacing={2} sx={{ ml: 4 }}>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div className="pokemonName">{pokeData.name}</div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {pokeTypes?.map(function (object, idx) {
                    return (
                      <div className="pokemonType" key={idx}>
                        {object.type.name}
                      </div>
                    );
                  })}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div className="pokemonType"> no.{pokeData.id}</div>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                className="pokemonImage"
                style={{
                  backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png")`,
                }}
              ></span>
            </Grid>
          </Grid>

          {/* pokemon icon decor */}
          <span className="pokeIcon">
            <CatchingPokemonTwoToneIcon
              sx={{
                fontSize: 350,
              }}
            />
          </span>
        </div>
      </Grid>
    </>
  );
}

export default PokemonCard;
