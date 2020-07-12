const express = require("express");
var bodyParser = require('body-parser');
var app = express();
var routerLogin = require("./code/server.js");

// body parser
app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

// app normal
app.get("/", (req, res, next) =>{
    res.json("Not api at gate 8000");
})
app.listen("8000", () =>{
    console.log("Connect successful!!!");
})
app.use("/login", routerLogin.routerLogin);