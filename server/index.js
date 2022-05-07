// server/index.js
const bodyParser = require('body-parser');

const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post("/check-subject", (req, res) => {
    if(req.body.age == 40 && req.body.gender == "Homme" && req.body.protein == "TRE") {
      res.json({ validAnswers: true });
    } else {
      res.json({ validAnswers: false });
    }
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});