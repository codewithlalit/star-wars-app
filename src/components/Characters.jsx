import { useState } from "react";
import {
  Box,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

const Characters = ({ starCast, getMoviesList }) => {
  const [charId, setCharId] = useState("");

  const handleChange = (event) => {
    setCharId(event.target.value);
    getMoviesList(event.target.value);
  };
  return (
    <>
      <Box className='character'>
        <Typography variant='h4'>Character:</Typography>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Character</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={charId}
            defaultValue={charId}
            label='Character'
            onChange={handleChange}
          >
            {starCast.map((star, i) => {
              return (
                <MenuItem key={`star: ${i}`} value={i}>
                  {star.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default Characters;
