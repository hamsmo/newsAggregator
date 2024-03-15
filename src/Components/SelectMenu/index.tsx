import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

interface SelectMenuProps {
  label: string;
  options: string[];
  selectOption: string;
  onChange: (arg: string) => void;
}

const SelectMenu = ({
  label,
  options,
  selectOption,
  onChange,
}: SelectMenuProps) => {
  const handleClear = () => {
    onChange("");
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <Select
        label={label}
        labelId={`${label}-select-label`}
        id={`${label}-select`}
        value={selectOption}
        onChange={(e) => onChange(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              disabled={!selectOption}
              onClick={handleClear}
              onMouseDown={(event) => event.preventDefault()}
              edge="end"
              sx={{
                marginRight: 1,
              }}
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        }
      >
        {options.map((option: any, index: number) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectMenu;
