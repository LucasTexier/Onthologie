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
        <Button key="one" sx={{ borderWidth: 2, borderRadius: 10 }} onClick={() => handleNavigate("/info")}>Chercher par filtrage</Button>,
        <Button key="two" sx={{ borderWidth: 2, borderRadius: 10 }} onClick={() => handleNavigate("/autre")}>Se faire recommander</Button>,
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