import React from "react";
import { Grid, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import SearchBar from "./SearchBar";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          minHeight: 80,
          padding: 1,
          backgroundColor: "white",
          position: "fixed",
          top: 0,
          zIndex: "100",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <header className="header" onClick={() => navigate("/")}>
            <CatchingPokemonIcon
              sx={{
                fontSize: 50,
              }}
            />
            Pokédex
          </header>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchBar />
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
