import { Grid } from "@mui/material";
import React from "react";
import Candidate from "./Candidate";
import { useNavigate } from "react-router-dom";

const Candidates = () => {

    let navigate = useNavigate();

    const [data, setData] = React.useState([]);
    const [validAnswers, setValidAnswers] = React.useState(0);

    React.useEffect(() => {
        fetch('/candidates', {
            method: 'GET',
            mode: 'cors'})
          .then((response) => response.json())
          .then((candidates) => {
              setData(candidates);
          });
    }, []);

    function incrementValidAnswers() {
        let newValue = validAnswers + 1;
        setValidAnswers(newValue);
        checkValidAnswers();
    }

    function checkValidAnswers() {
        if(data.length === validAnswers) {
            navigate('/final-answer');
        }
    }

    return(
        <Grid container spacing={2} style={{ padding: "15px" }}>
            {data.map((item) => (
                <Grid key={item.id} item xs={12} sm={3}>
                    <Candidate id={item.id} name={item.name} picture={item.picture} protein={item.protein} onCandidateValidated={incrementValidAnswers} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Candidates;