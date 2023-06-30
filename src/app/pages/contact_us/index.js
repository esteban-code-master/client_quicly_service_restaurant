import React from "react"
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const PagesContactUs = () => {

    return (
        <Grid container spacing={2} className = 'container'>
            <Grid item xs={12}>
                <Typography variant="h1"  fontSize={18}> Adquiere Quickly Service </Typography>
                <Typography variant="h3"  fontSize={13}> Contactanos </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    label="Nombre*" 
                    variant="outlined"
                    className="w-100"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    label="Correo*" 
                    variant="outlined"
                    className="w-100"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    label="Negocio*" 
                    variant="outlined"
                    className="w-100"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    label="Telefono*" 
                    variant="outlined" 
                    className="w-100"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    label="Notas" 
                    variant="outlined"
                    className="w-100"
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" className="w-100">Enviar</Button>
            </Grid>
        </Grid>
    )
}

export default PagesContactUs
