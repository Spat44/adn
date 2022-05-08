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
        <div>
            {data.map((item) => (
                <Candidate name={item.name} picture={item.picture}>
                </Candidate>
            ))}
        </div>
    );
};

export default Candidates;