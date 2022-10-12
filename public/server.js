const express = require("express");
const app = express();
const bodyParser=require("body-parser")
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/static",express.static('public'))
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render('todo.ejs');
});

app.post("/", (req, res) => {
 console.log(req.body)    // e
});


app.listen(port, () => {
  console.log(`app running in port ${port}`);
});
