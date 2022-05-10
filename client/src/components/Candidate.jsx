import { Card, CardMedia, CardContent, Typography, ToggleButtonGroup, ToggleButton, Slider, Collapse, Button } from "@mui/material";
import React from "react";
import marks from "../utils/marks";

const Candidate = (props) => {

    const [gender, setGender] = React.useState('');
    const [age, setAge] = React.useState(30);
    const [firstExpanded, setFirstExpanded] = React.useState(false);
    const [secondExpanded, setSecondExpanded] = React.useState(false);

    function checkAnswers() {


        console.log(props.id)
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
                setFirstExpanded(true)
              } else {
                //TODO Display error message
              }
          });
    
      };

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
                <Typography gutterBottom variant="h5" component="div">
                    First expand!
                </Typography>
            </Collapse>

            <Collapse in={secondExpanded} timeout="auto" unmountOnExit>
                <Typography gutterBottom variant="h5" component="div">
                    Second expand!
                </Typography>
            </Collapse>
        </Card>
    );
}

export default Candidate