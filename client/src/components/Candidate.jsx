import { Card, CardMedia, CardContent, Typography, ToggleButtonGroup, ToggleButton, Slider, Collapse, Button, TextField } from "@mui/material";
import React from "react";
import marks from "../utils/marks";
import GaugeChart from "react-gauge-chart";

const Candidate = (props) => {

    const [gender, setGender] = React.useState('');
    const [age, setAge] = React.useState(30);
    const [mismatch, setMismatch] = React.useState(0);
    const [gaugePercent, setPercent] = React.useState(0);
    const [firstExpanded, setFirstExpanded] = React.useState(false);
    const [secondExpanded, setSecondExpanded] = React.useState(false);

    function checkAnswers() {

        var jsonData = {
          "gender": gender,
          "age": age,
          "id": props.id
        };
      
        fetch('/check-candidate', {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(jsonData) })
          .then((response) => response.json())
          .then((json) => {
              if(json.validAnswers) {
                setFirstExpanded(true);
              } else {
                setFirstExpanded(false);
                //TODO Display error message
              }
          });
    
      };

    function checkMismatchs() {
        let valid = mismatch === props.protein.filter(it => !it.match).length;
        let percent = props.protein.filter(it => it.match).length / props.protein.length
        console.log(percent);
        setPercent(percent);
        setSecondExpanded(valid);
    }

    return(
        <Card>
            <CardMedia
                component="img"
                alt=""
                height="140"
                image={"http://localhost:3001/" + props.picture}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
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
                        <ToggleButton value="female">Femme</ToggleButton>
                        <ToggleButton value="male">Homme</ToggleButton>
                    </ToggleButtonGroup>
                </Typography>
                <Typography component="h2" variant="h5" style={{ textAlign: "center", marginBottom: "15px", marginTop: "15px" }}>
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
                <Typography align="center">
                    <Button onClick={checkAnswers}>GO !</Button>
                </Typography>
            </CardContent>
            <Collapse in={firstExpanded} timeout="auto" unmountOnExit>
                <Typography component="h2" variant="h5" style={{ textAlign: "center", marginBottom: "15px", marginTop: "15px" }}>
                    Séquence
                </Typography>
                <Typography gutterBottom variant="h5" component="div" style={{display: "flex"}}>
                    {props.protein.map((prot) => {
                        return prot.match ?
                            <p style={{color: "green", marginLeft: "4px"}}>{prot.value}</p>
                        :
                            <p style={{color: "red", marginLeft: "4px"}}>{prot.value}</p>
                    })}
                </Typography>
                <Typography component="h2" variant="h5" style={{ textAlign: "center", marginBottom: "15px", marginTop: "15px" }}>
                    Nombre de mismatchs
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                <TextField
                    id="outlined-number"
                    label="Nombre"
                    type="number"
                    value={mismatch}
                    onChange={(event) => { setMismatch(parseInt(event.target.value)) }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                </Typography>
                <Typography align="center">
                    <Button onClick={checkMismatchs}>GO !</Button>
                </Typography>
            </Collapse>

            <Collapse in={secondExpanded} timeout="auto" unmountOnExit>
                <Typography gutterBottom variant="h5" component="div">
                    <GaugeChart id="gauge" percent={gaugePercent} />
                </Typography>
            </Collapse>
        </Card>
    );
}

export default Candidate