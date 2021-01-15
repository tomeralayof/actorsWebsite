const express = require('express');
const router = express.Router();
const {User, validateUser} = require('./../modules/user');
const bcrypt = require('bcrypt');
const auth = require("../middlewear/auth");

// create a new user:
router.post("/", async (req,res)=>{

  const {error} = validateUser(req.body);
  if(error) return res.status(400).send(error.details[0].message);
    
  let userExist = await User.findOne({email: req.body.email});
  if(userExist) return res.status(400).send("email is already exist")
  
  const user = await new User(req.body)
  const hash = await bcrypt.genSalt(12);
  user.password = await bcrypt.hash(req.body.password, hash)
  user.save(req.body)
  
  res.send(user);  
});

//get my user details.
router.get("/:id" , auth , async(req,res)=>{
  try{
    const data = await User.findById( req.user._id);
    res.send(data);
    
  } catch(err){
    res.send(err);
  }
});


//update user favorite array
router.patch("/:id", auth , async (req , res) =>{
  try{
  const user = await User.findById(req.user._id);
    user.favorites.push(req.params.id) // req.body , // isFavorite === true .
    console.log(req.user._id);
    console.log(req.params.id);
    user.save(req.body) 
    res.send(user)

  } catch(err){
    console.log(err);
  }

});


router.delete("/:id", auth ,async (req,res)=>{

  try{
    const user = await User.findById(req.user._id); 
    if(!user) return res.status(400).send("the user was not found");
    
    user.favorites= user.favorites.filter((fav)=>{
      if(fav !== req.params.id){
      return fav
   }
 });    

  user.save(req.body) 
  res.send(user);

  } catch(err){
    res.send(err)
  }
});


module.exports = router;