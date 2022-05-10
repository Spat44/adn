// server/index.js
const bodyParser = require('body-parser');

const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.post("/check-subject", (req, res) => {
    if(req.body.age == 40 && req.body.gender == "Homme" && req.body.protein == "TRE") {
      res.json({ validAnswers: true });
    } else {
      res.json({ validAnswers: false });
    }
});

app.get("/candidates", (_, res) => {
  let candidates = require("./candidates.json");
  let basicInfoOnCandidates = candidates.map(({id, name, picture, protein}) => ({id, name, picture, protein}))
  res.json(basicInfoOnCandidates);
});

app.post("/check-candidate", (req, res) => {
  let candidates = require("./candidates.json");
  let candidate = candidates.find(it => it.id == req.body.id);
  if(candidate == null) res.json({ validAnswers: false });
  let valid = candidate.gender == req.body.gender && getAge(candidate.birthdate) == req.body.age;
  res.json({ validAnswers: valid })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

function getAge(strBirthdate) {

  let birthdate = new Date(strBirthdate);
  var month_diff = Date.now() - birthdate.getTime();  
      
  //convert the calculated difference in date format  
  var age_dt = new Date(month_diff);   
    
  //extract year from date      
  var year = age_dt.getUTCFullYear();  
    
  //now calculate the age of the user
  return Math.abs(year - 1970); 
}