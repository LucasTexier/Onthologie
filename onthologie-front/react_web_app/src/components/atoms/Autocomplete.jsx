import React from 'react';
import TextField from '@mui/material/TextField';
import AutocompleteComponent from '@mui/material/Autocomplete';

const Autocomplete = ({ onSelect }) => { // Ajout de onSelect comme prop
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const top100Films = [
    { label: 'Le_loup_de_Wall_Street' },
    { label: 'Once_Upon_a_Time..._in_Hollywood' },
    { label: 'Inception' },
    { label: '&&&' },
    { label: 'Once_Upon_a_Time..._in_Hollywood' },

  ];

  return (
    <AutocompleteComponent
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: '20%', backgroundColor: 'white', marginLeft: '40%', marginTop: '5%' }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
      onChange={(event, value) => onSelect(value.label)} // Appeler onSelect avec le label sélectionné
    />
  );
}

export default Autocomplete;
