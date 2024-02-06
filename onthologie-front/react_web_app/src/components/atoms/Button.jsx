import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from "react-router-dom";


export default function GroupSizesColors() {
    const path = "/a";
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };
    const buttons = [
        <Button key="one" sx={{ borderWidth: 5, borderRadius: 10, color: 'white', fontSize: '1rem', backgroundColor:"darkred"}} onClick={() => handleNavigate("/filtre")}>Chercher par filtrage</Button>,
        <Button key="two" sx={{ borderWidth: 5, borderRadius: 10, color: 'white', fontSize: '1rem', backgroundColor:"darkred" }} onClick={() => handleNavigate("/recommandation")}>Se faire recommander</Button>,
    ];
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <ButtonGroup size="large" aria-label="large button group">
                {buttons}
            </ButtonGroup>
        </Box>
    );
}