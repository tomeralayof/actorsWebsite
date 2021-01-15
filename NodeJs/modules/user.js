const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const { boolean, array } = require('@hapi/joi');
const jwt = require('jsonwebtoken');
 
const userSchema = new mongoose.Schema({

  name: {
    type: String,
    minlength:2,
    maxlength: 300,
    required: true,
  },

  email: {
    type:String, 
    minlength:6,
    maxlength: 300,
    required: true,
    unique:true
  },

  password: {
    type: String,
    minlength: 7,
    maxlength: 300,
    required: true,
  },

  isActor: {
    type: Boolean,
    required: true
  },

  favorites: {
    type: Array,
  },

});


userSchema.methods.createToken = function () {

const token = jwt.sign({_id: this._id , isActor: this.isActor , name: this.name, favorites:this.favorites}, "myPrivateKey");
return token
};

const User = mongoose.model('User', userSchema, 'users');

function validateUser(user){
    const schema = Joi.object({
      name: Joi.string().min(2).max(300).required(),
    email: Joi.string().min(6).max(300).required().email(),
    password: Joi.string().min(7).max(300).required(),
    isActor: Joi.boolean(),
    favorites: Joi.array()
    });

    return schema.validate(user)
}


module.exports = {User, validateUser};



























// const express = require("express");
// const auth = require("../middlewear/auth");
// const router = express.Router();
// const {Profile, validateProfile} = require("../modules/profile");
// const {User} = require('../modules/user');


// //make a new profile
// router.post("/", auth , async (req,res)=>{
  
//   const {error} = validateProfile(req.body);
//   if(error) return res.status(400).send(error.details[0].message);
//   try{
//     console.log(req.user)
//     const profile = await new Profile({
//       name: req.body.name,
//       lastName: req.body.lastName,
//       school: req.body.school,
//       height: req.body.height,
//       email: req.body.email,
//       age: req.body.age,
//       description: req.body.description,
//       user_id:  req.user._id
//       // favorites: req.
//     })
//     .save();
//     // console.log(user);
//     res.send(profile);
    
//   } catch(err){
//     res.send( "shiraz is stupid",  err)
//   }
// });

// //get a single profile from every user requiement:

// router.get("/actor-single-profile/:id", auth ,async(req,res) =>{
//   const myId =  req.params.id;
//   try{
//     const getProfile = await Profile.findOne({user_id: myId});        
//     res.send(getProfile)

//   } catch(err){
//     res.send(err, "profile not found")
//   }
// } );



// //get single profile for automatic fullfilling the input
// router.get("/user/:id" , auth ,async (req,res)=>{
//   try{
//   const user = await User.findOne({_id: req.params.id});
//   if(!user) return res.status(400).send("user doesnt exist")
//   res.send(user);
//   } catch (err) {
//     res.send("shiraz is stupid", err)
//   }
// })


// //get a single profile
// router.get('/:id', auth, async (req, res) => {
    
  
//   try{
//     const getProfile = await Profile.findOne({  user_id: req.user._id  });
//     console.log(getProfile)
//     if (!getProfile) return res.send('The profile with the given ID was not found.').status(404);
//     res.send(getProfile);
//   } catch(err){
//     res.send('You are stupid:' + err)
//     console.log(err)
//   }
// });



// //get all profiles
// router.get("/", auth, async (req,res)=>{
//   try{
//     const getProfiles = await Profile.find();
//     res.send(getProfiles);
//   } catch{
//     console.log(err);
//   }
// });

// //update profile
// router.put('/:id',auth,async(req,res)=>{
// console.log(req.user._id)


// try{
//   let profile = await Profile.findOneAndUpdate({ user_id: req.user._id });
  
//   profile.name = req.body.name,
//   profile.lastName = req.body.lastName,
//   profile.school= req.body.school,
//   profile.height = req.body.height,
//   profile.age = req.body.age,
//   profile.description = req.body.description,
//   profile.user_id =  req.user._id,

  
//   console.log(profile)
//   profile = await profile.save() 
//   res.send(profile)
  
//   } catch(err){
//     console.log(err)
//   }
// });


// //get my profile and send all the profiles inside the favorite: 








// module.exports = router;