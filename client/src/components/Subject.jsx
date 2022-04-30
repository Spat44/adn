import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";

const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 10,
      label: '10',
    },
    {
      value: 20,
      label: '20',
    },
    {
      value: 30,
      label: '30',
    },
    {
      value: 40,
      label: '40',
    },
    {
      value: 50,
      label: '50',
    },
    {
      value: 60,
      label: '60',
    },
    {
      value: 70,
      label: '70',
    },
    {
      value: 80,
      label: '80',
    },
    {
      value: 90,
      label: '90',
    },
    {
      value: 100,
      label: '100',
    }
  ];

const Subject = () => {
    return(
        <div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={2}>
                <img 
                    src={process.env.PUBLIC_URL+"obama.jpg"} 
                    alt="Barack Obama"
                    style={{ maxWidth: "100%", maxHeight: "500px" }}
                    
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Card>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5" style={{ textAlign: "center", marginBottom: "15px" }}>
                            Genre
                        </Typography>
                        <Typography align="center">
                            <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{ margin: "auto" }}>
                                <Button>Femme</Button>
                                <Button>Homme</Button>
                            </ButtonGroup>
                        </Typography>
                    </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5" style={{ textAlign: "center", marginBottom: "15px" }}>
                            Âge
                        </Typography>
                        <Typography align="center">
                            <Slider
                                aria-label="Always visible"
                                defaultValue={50}
                                step={1}
                                min={0}
                                max={100}
                                marks={marks}
                                valueLabelDisplay="on"
                            />
                        </Typography>
                    </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Card>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5" style={{ textAlign: "center", marginBottom: "15px" }}>
                            Séquence de protéine
                        </Typography>
                        <Typography align="center" style={{ marginBottom: "15px" }}>
                            <TextField id="filled-basic" label="MRQH..." variant="filled" />
                        </Typography>
                        <Typography align="center">
                            <Button>Vérifier</Button>
                        </Typography>
                    </CardContent>
                </Card>
              </Grid>
            </Grid>
        </div>
    );
};

export default Subject;