import React from 'react';
import Button from '@mui/material/Button';

const BasicButtons = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      sx={{ marginLeft: '44%', marginTop: '2%', color: 'white', fontSize: '1.2rem', backgroundColor: 'darkred', border: '2px solid black' }}
    >
      Search similar movie
    </Button>
  );
}

export default BasicButtons;