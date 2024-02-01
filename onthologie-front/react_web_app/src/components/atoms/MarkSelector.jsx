import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MarkSelector({ value, onChange }) {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 600,
        backgroundColor: "white",
        marginLeft: "30%",
      }}
      size="small"
    >
      <InputLabel>Mark</InputLabel>
      <Select value={value} onChange={handleChange}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={0.5}>1/10</MenuItem>
        <MenuItem value={1}>2/10</MenuItem>
        <MenuItem value={1.5}>3/10</MenuItem>
        <MenuItem value={2}>4/10</MenuItem>
        <MenuItem value={2.5}>5/10</MenuItem>
        <MenuItem value={3}>6/10</MenuItem>
        <MenuItem value={3.5}>7/10</MenuItem>
        <MenuItem value={4}>8/10</MenuItem>
        <MenuItem value={4.5}>9/10</MenuItem>
        <MenuItem value={5}>10/10</MenuItem>
      </Select>
    </FormControl>
  );
}
