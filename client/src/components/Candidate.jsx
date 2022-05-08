import { Card, CardMedia, CardContent, Typography, ToggleButtonGroup, ToggleButton, Slider, Collapse } from "@mui/material";
import React from "react";
import marks from "../utils/marks";

const Candidate = () => {

    const [gender, setGender] = React.useState('');
    const [age, setAge] = React.useState(30);
    const [firstExpanded, setFirstExpanded] = React.useState(false);
    const [secondExpanded, setSecondExpanded] = React.useState(false);

    return(
        <Card>
            <CardMedia
                component="img"
                alt=""
                height="140"
                image=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Candidate Name
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
                        <ToggleButton value="Femme">Femme</ToggleButton>
                        <ToggleButton value="Homme">Homme</ToggleButton>
                    </ToggleButtonGroup>
                </Typography>
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