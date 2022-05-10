import { Grid } from "@mui/material";
import React from "react";
import Candidate from "./Candidate";

const Candidates = () => {

    const [data, setData] = React.useState([]);

    fetch('/candidates', {
        method: 'GET',
        mode: 'cors'})
      .then((response) => response.json())
      .then((candidates) => {
          setData(candidates);
      });

    return(
        <Grid container spacing={2} style={{ padding: "15px" }}>
            {data.map((item) => (
                <Grid item xs={12} sm={3}>
                    <Candidate id={item.id} name={item.name} picture={item.picture} protein={item.protein} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Candidates;