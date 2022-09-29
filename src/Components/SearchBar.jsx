import React from "react";
import Textfield from "@mui/material/TextField";
import GenSelect from "./GenSelect";
import { Grid } from "@mui/material";

function SearchBar() {
  return (
    <>
      <nav className="nav">
        <Grid container spacing={2}>
          <Grid item xs={12} md={10} lg={10}>
            <Textfield fullWidth />
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            <GenSelect />
          </Grid>
        </Grid>
      </nav>
    </>
  );
}

export default SearchBar;
