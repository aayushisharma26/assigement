const { signup,login} = require("../Controller/controller");
const express=require('express')

var router=express.Router();

router.post("/",signup)

router.post("/login",login)

// router.post("")

// router.post("/blog/login",login)

module.exports=router