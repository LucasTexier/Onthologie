import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function search() {
    return (
            <Button variant="contained" endIcon={<SendIcon />} style={{ fontSize: '1.5rem', backgroundColor: 'darkred', marginTop: '5%', marginLeft:'45%', width:'10%', textAlign:'left'}}>
                Envoyer
            </Button>
    );
}