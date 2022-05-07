import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';

const SubjectSuccess = () => {
    return(
        <div style={{ paddingTop: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Card style={{ maxWidth: "800px" }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h1" variant="h4" style={{ textAlign: "center", marginBottom: "15px" }}>
                        Vous avez réussi à décoder la séquence HLA de Barack Obama !
                    </Typography>
                    <Typography component="h2" variant="h5" style={{ textAlign: "center", marginBottom: "15px" }}>
                        Mais le temps presse et vous n'avez pas encore de donneur. 
                        Bien heureusement vous disposez de fiches patient avec les informations nécessaires.
                        Malheureusement, un stagiaire passant par là les a égarées dans des magazines. A vous de les retrouver !
                    </Typography>
                    <Typography style={{ textAlign: "center", marginBottom: "15px" }}>
                        <Button component={Link} to="/candidates" variant="contained">Liste des donneurs potentiels</Button>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default SubjectSuccess;