const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const TodoTask = require("../models/TodoTask")
const port = 3000;

dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/static", express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


main().catch(err => console.log(err));

async function main(){
   mongoose.connect(
    process.env.DB_CONNECT,
    {
    },() => {
      console.log("Connected to db!");
      app.listen(port, () => {
        console.log(`app running in port ${port}`);
      });
    }
  )
}



app.get("/", (req, res) => {
  TodoTask.find({},(err,tasks)=>{
    res.render('todo.ejs',{todoTasks:tasks});
  })
});

app.post("/", async (req, res) => {
  const todoTask= new TodoTask({
    content:req.body.content
  });
  try {
    await todoTask.save();
    res.send("success")
  } catch (error) {
    console.log("error : "+error);
    res.redirect("/")
  }
});
