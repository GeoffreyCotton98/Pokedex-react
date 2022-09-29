import React from "react";
import { Grid } from "@mui/material";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";

function PokemonCard({ pokemon }) {
  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        <div className={`pokemonCard`}>
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
                  <div className="pokemonName">{pokemon.name}</div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div className="pokemonType">hello</div>
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
                  backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png")`,
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
