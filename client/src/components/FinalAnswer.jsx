import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const FinalAnswer = () => {

    const [name, setName] = React.useState("");
    const [resultDisplayed, setResultDisplayed] = React.useState(false);
    const [imgUrl, setImgUrl] = React.useState("");

    function checkName() {

        var jsonData = {
            "name": name
        };

        fetch('/final-answer', {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(jsonData) })
          .then((response) => response.json())
          .then((json) => {
              if(json.validAnswers) {
                setImgUrl(process.env.PUBLIC_URL+"bravo.gif");
                setResultDisplayed(true);
              } else {
                setImgUrl(process.env.PUBLIC_URL+"try-again.gif");
                setResultDisplayed(true);
                //TODO Display error message
              }
          });
    };

    return(
        <div style={{ paddingTop: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Card style={{ maxWidth: "800px" }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h1" variant="h4" style={{ textAlign: "center", marginBottom: "15px" }}>
                        Qui est le meilleur donneur ?
                    </Typography>
                    <Typography component="h2" variant="h5" style={{ textAlign: "center", marginBottom: "15px" }}>
                        Entrez le nom du donneur ou de la donneuse. Soyez certain de votre choix, vous n'aurez pas de seconde chance !
                        Vérifiez donc bien l'orthographe.
                    </Typography>
                    <Typography component="h2" variant="h5" style={{ textAlign: "center", marginBottom: "15px" }}>
                        <TextField id="outlined-basic" label="Entrez le nom" variant="outlined" value={name} onChange={(event) => { setName(event.target.value) }} />
                    </Typography>
                    <Typography style={{ textAlign: "center", marginBottom: "15px" }}>
                        <Button  variant="contained" onClick={checkName}>Vérifier</Button>
                    </Typography>
                    <Typography style={{ textAlign: "center", marginBottom: "15px", visibility: resultDisplayed ? 'visible' : 'hidden'}}>
                        <img src={imgUrl} alt="result" />
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default FinalAnswer;