import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function GenSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Generation</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Generation"
          onChange={handleChange}
        >
          <MenuItem value={"generation-i"}>I</MenuItem>
          <MenuItem value={"generation-ii"}>II</MenuItem>
          <MenuItem value={"generation-iii"}>III</MenuItem>
          <MenuItem value={"generation-iv"}>IV</MenuItem>
          <MenuItem value={"generation-v"}>V</MenuItem>
          <MenuItem value={"generation-vi"}>VI</MenuItem>
          <MenuItem value={"generation-vii"}>VII</MenuItem>
          <MenuItem value={"generation-viii"}>VIII</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
