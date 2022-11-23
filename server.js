import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from './app/models/index.js'

const app = express();

let corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

//parse require of content-type - application/json
app.use(bodyParser.json());

//parse require of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//simple route
app.get("/", (request, response) => {
  response.json({ Message: "Welcome to application." });
});

//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}.`);
});



db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!");
    process.exit();
  });