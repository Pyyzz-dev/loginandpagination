const express = require("express");
var bodyParser = require('body-parser');
var routerLogin = express.Router();

routerLogin.post("/register/:username/:password", (req, res, next)=>{
    if(req.body.username == req.params.username && req.body.password == req.params.password){
        res.json("Login successful");
    } else{
        res.json("Login failed");
    }
})

module.exports = {
    routerLogin: routerLogin,
};