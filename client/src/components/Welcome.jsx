import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return(
        <div style={{ paddingTop: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Card style={{ maxWidth: "800px" }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h1" variant="h4" style={{ textAlign: "center", marginBottom: "15px" }}>
                        Bienvenue dans la base de données Transplant-Action.
                    </Typography>
                    <Typography component="h2" variant="h5" style={{ textAlign: "center", marginBottom: "15px" }}>
                        Vous souhaitez trouver un donneur compatible pour Barak Obama
                    </Typography>
                    <Typography style={{ textAlign: "center", marginBottom: "15px" }}>
                        <Button component={Link} to="/subject" variant="contained">Démarrer</Button>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Welcome;