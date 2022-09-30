import React from "react";
import Textfield from "@mui/material/TextField";
import GenSelect from "./GenSelect";
import { Grid } from "@mui/material";

function SearchBar() {
  return (
    <>
      <nav className="nav">
        <Grid container spacing={1}>
          <Grid item xs={8} md={8} lg={8}>
            <Textfield fullWidth />
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <GenSelect />
          </Grid>
        </Grid>
      </nav>
    </>
  );
}

export default SearchBar;
