const express = require('express');
const router = express.Router();
const auth = require("../middlewear/auth");
const {Profile} = require('../modules/profile');
const { User } = require('../modules/user');



router.get("/my-user",auth,async(req,res)=>{
  try{
    const user = await User.findById(req.user._id);
    res.send(user)
  } catch(err){
    console.log("shiraz is stupid", err)
  }
});

module.exports = router;