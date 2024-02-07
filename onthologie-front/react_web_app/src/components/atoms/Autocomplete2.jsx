// Autocomplete2.jsx
import React from 'react';
import TextField from '@mui/material/TextField';
import AutocompleteComponent from '@mui/material/Autocomplete';

const Autocomplete2 = ({ onSelectActor }) => { 
  const topActors = [
    { label: 'Margot_Robbie' },
    { label: 'Léonardo_DiCaprio' },
    { label: 'Brad_Pitt' },
  ];

  return (
    <AutocompleteComponent
      disablePortal
      id="combo-box-demo"
      options={topActors}
      sx={{ width: '20%', backgroundColor: 'white', marginLeft: '40%', marginTop: '5%' }}
      renderInput={(params) => <TextField {...params} label="Actor" />}
      onChange={(event, value) => onSelectActor(value.label)}
    />
  );
}

export default Autocomplete2;
