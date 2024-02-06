import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Liste({ values = [], onSelect = () => {}, type }) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleOk = () => {
    onSelect(selectedValue);
    type = 'OK'
    handleClose();
  };

  return (
    <div style={{ textAlign: 'left', marginLeft: '50px', marginRight:'50px' }}>
    <Button onClick={handleClickOpen} style={{ color: 'darkred' }}>Choose the {type} </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Choose the {type} </DialogTitle>
        <DialogContent>
          <Box
            component="form"
          >
            <FormControl sx={{ m: 1, minWidth: 300}}>
              <InputLabel>Select an option</InputLabel>
              <Select
                value={selectedValue}
                onChange={handleChange}
                input={<OutlinedInput label="Select an option" />}
              >
                {values.map((value, index) => (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOk}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
