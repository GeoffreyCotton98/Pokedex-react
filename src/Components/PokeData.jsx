import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, LinearProgress } from "@mui/material";

function PokeData({ currentPage, pokemon, flavorText, generation }) {
  useEffect(() => {}, []);

  // conditionally renders based on page number
  if (currentPage === 1) {
    return (
      <div className="dataPage">
        <div className="flavorText">{flavorText}</div>

        <div className="pokemonWeight">Weight: {pokemon.weight}lbs</div>

        <div className="firstAppear">First Appearance: {generation} </div>

        <div className="pokemonAbilitiesContainer">
          <div className="abilityTitle">Abilities:</div>
          <div className="pokemonAbilities">
            {pokemon.abilities?.map(function (object, idx) {
              return (
                <div className="ability" key={idx}>
                  {object.ability.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 2) {
    return (
      <div className="dataPage">
        <Grid container spacing={1}>
          {pokemon.stats?.map(function (object, idx) {
            return (
              <Grid
                item
                xs={12}
                key={idx}
                sx={{
                  mt: 3,
                }}
              >
                <Grid
                  container
                  sx={{ display: "flex", textTransform: "capitalize" }}
                >
                  <Grid item xs={4}>
                    {object.stat.name}
                  </Grid>
                  <Grid item xs={2} sx={{ fontWeight: "bold" }}>
                    {object.base_stat}
                  </Grid>
                  <Grid item xs={6}>
                    <LinearProgress
                      variant="determinate"
                      value={object.base_stat}
                    />
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
          <Grid
            item
            xs={12}
            sx={{
              mt: 3,
            }}
          >
            <div className="statTotal">
              Total:{" "}
              <strong style={{ marginLeft: "10px" }}>
                {" "}
                {pokemon.stats
                  .map((object) => object.base_stat)
                  .reduce(
                    (previousValue, currentValue) =>
                      previousValue + currentValue
                  )}
              </strong>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

  return <h1>hello</h1>;
}

export default PokeData;
