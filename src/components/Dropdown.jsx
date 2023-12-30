import { MenuItem, FormControl, InputLabel, Select } from "@mui/material";

const Dropdown = ({ label, options, onChange }) => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="dropdown-label">{label}</InputLabel>
      <Select
        labelId="dropdown-label"
        sx={{ width: "100%" }}
        label={label}
        name={label.toLowerCase()}
        helperText={`Please select a ${label}`}
        onChange={onChange}
      >
        <MenuItem value="" disabled>
          Select something
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
