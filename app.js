const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app
.use(express.static(path.join(__dirname,'demo','build')))
.get("/",(req,res) => {res.render(path.join(__dirname,'demo','build','index.html'))})

app
.use(express.static(path.join(__dirname,'demo','build')))
.get("/country/*",(req,res) => {res.sendFile(path.join(__dirname,'demo','build','index.html'))})

app.listen(PORT, console.log("Server started on PORT " + PORT));