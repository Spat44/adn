import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton'
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const Subject = () => {

  let navigate = useNavigate();

  const [gender, setGender] = React.useState('');
  const [age, setAge] = React.useState(30);
  const [protein, setProtein] = React.useState('');

  function checkAnswers() {

    var jsonData = {
      "gender": gender,
      "age": age,
      "protein": protein
    };
  
    fetch('/check-subject', {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(jsonData) })
      .then((response) => response.json())
      .then((json) => {
          if(json.validAnswers) {
            navigate('/subject-success');
          } else {
            //TODO Display error message
          }
      });

  };

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
                            <ToggleButtonGroup 
                              id="genderSelect"
                              value={gender} onChange={(event, newGender) => { setGender(newGender) }}
                              variant="contained" aria-label="outlined primary button group"
                              exclusive={true}
                              style={{ margin: "auto" }}>
                                <ToggleButton value="Femme">Femme</ToggleButton>
                                <ToggleButton value="Homme">Homme</ToggleButton>
                            </ToggleButtonGroup>
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
                                defaultValue={age}
                                value={age}
                                onChange={(event, newAge) => { setAge(newAge) }}
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
                            <TextField id="filled-basic" label="MRQH..." variant="filled" value={protein} onChange={(event) => { setProtein(event.target.value) }} />
                        </Typography>
                        <Typography align="center">
                            <Button onClick={checkAnswers}>Vérifier</Button>
                        </Typography>
                    </CardContent>
                </Card>
              </Grid>
            </Grid>
        </div>
    );
};

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

export default Subject;