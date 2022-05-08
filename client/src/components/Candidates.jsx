import React from "react";

const Candidates = () => {

    fetch('/candidates', {
        method: 'GET',
        mode: 'cors'})
      .then((response) => response.json())
      .then((json) => {
          console.log(json);
      });

    return(
        <div>
            <h1>Candidates</h1>
        </div>
    );
};

export default Candidates;