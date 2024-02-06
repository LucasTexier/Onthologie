import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '../atoms/Button';
import lucas from '../../assets/logo/lucas.png';
import mass from '../../assets/logo/mass.png';
import maelia from '../../assets/logo/maelia.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Arial, sans-serif',
        h2: {
            color: '#000000', // Change the color to a darker shade
            fontWeight: 'bold',
            fontSize: '2.5rem',
        },
        body1: {
            color: '#000000', // Change the color to a darker shade
            fontSize: '2rem',
        },
    },
});

export default function SimplePaper() {
    const text_presentation =
        "Amoureux de cinéma, les créateurs de Movie Adivsor ont décidé de créer une application qui permet aux utilisateurs de trouver des films qui leur correspondent.";
    const text_start = "Pour commencer l'expérience, cliquez sur un bouton ci-dessous : faîtes vous recommander un film ou bien chercher votre film par filtrage !"
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    height: '100vh',
                }}
            >
                <Box sx={{ marginTop: '100px', marginRight: '70px', marginLeft: '50px'}}>
                    <Paper elevation={20} sx={{ width: 700, height: 350 , backgroundColor:"darkgray"}}>
                        <Typography variant="h2" align="center">
                            Qui sommes nous ?
                        </Typography>
                        <Divider sx={{ width: '100%' }} />
                        <Typography variant="body1" align="center" sx={{ marginBottom: '5%', marginTop: '5%' }}>
                            {text_presentation}
                        </Typography>
                    </Paper>
                </Box>
                <Box sx={{ marginTop: '275px' }}>
                    <Paper elevation={20} sx={{ width: 500, height: 800, backgroundColor:"darkgray"}}>
                        <Typography variant="h2" align="center">
                            Notre équipe
                        </Typography>
                        <Divider sx={{ width: '100%' }} />
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                            <img src={mass} style={{ width: '150px', height: '150px' }} />
                        </Box>
                        <Typography variant="h2" align="center">
                            Massiwa CHABBI
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                            <img src={maelia} style={{ width: '150px', height: '150px' }} />
                        </Box>
                        <Typography variant="h2" align="center">
                            Maëlia DUHART
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>                      
                            <img src={lucas} style={{ width: '150px', height: '150px' }} />
                        </Box>
                        <Typography variant="h2" align="center">
                            Lucas TEXIER
                        </Typography>                        
                    </Paper>
                </Box>
                <Box sx={{ marginTop: '100px', marginRight: '50px', marginLeft: '70px' }}>
                    <Paper elevation={20} sx={{ width: 700, height: 350, backgroundColor:"darkgray" }}>
                    <Typography variant="h2" align="center">
                            Démarrer l'expérience !
                        </Typography>
                        <Divider sx={{ width: '100%' }} />
                        <Typography variant="body1" align="center" sx={{ marginBottom: '5%', marginTop: '5%' }}>
                            {text_start} 
                        </Typography>
                        <Button />
                    </Paper>
                </Box>
            </Box>
        </ThemeProvider>
    );
}