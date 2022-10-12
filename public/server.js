const express = require("express");
const app = express();
const port = 3000;

app.use("/static",express.static('public'))
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render('todo.ejs');
});

app.listen(port, () => {
  console.log(`app running in port ${port}`);
});
