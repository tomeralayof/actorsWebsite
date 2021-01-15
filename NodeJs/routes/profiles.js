const express = require("express");
const auth = require("../middlewear/auth");
const router = express.Router();
const {Profile, validateProfile} = require("../modules/profile");
const {User} = require('../modules/user');


//make a new profile
router.post("/", auth , async (req,res)=>{
  

  const {error} = validateProfile(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  try{
    const profile = await new Profile({
      name: req.body.name,
      lastName: req.body.lastName,
      school: req.body.school,
      height: req.body.height,
      email: req.body.email,
      age: req.body.age,
      description: req.body.description,
      user_id: req.user._id,
      // favorites: `${req.user.favorites}`
    })
    .save(req.body);
    res.send(profile)
    console.log("user_favorites",profile.favorites);
    console.log("user_id",profile.user_id);


    // console.log(req.body);
    
    
  } catch(err){
    res.send(err)
  }
});

//get a single profile from every user requiement:
router.get("/actor-single-profile/:id", auth ,async(req,res) =>{
  const myId =  req.params.id
  try{
    // let getProfile = null;
const  getProfile = await Profile.findOne({user_id: myId});    
    
    res.send(getProfile)
  } catch(err){
    res.send(err, "profile not found")
  }
} );



//get single profile for automatic fullfilling the input
router.get("/user/:id" , auth ,async (req,res)=>{
  try{
  const user = await User.findOne({_id: req.params.id});
  if(!user) return res.status(400).send("user doesnt exist")
  res.send(user);
  } catch (err) {
console.log(err)
  }
})


//get a single profile
router.get('/:id', auth, async (req, res) => {
  
  try{
    const getProfile = await Profile.findOne({  user_id: req.user._id  });
    console.log(getProfile)
    if (!getProfile) return res.send('The profile with the given ID was not found.').status(404);
    res.send(getProfile);
  } catch(err){
    res.send(err)
    console.log(err)
  }
});



//get all profiles
router.get("/", auth, async (req,res)=>{
  try{
    const getProfiles = await Profile.find();
    res.send(getProfiles);
  } catch{
    console.log(err);
  }
});

//update profile
router.put('/:id',auth,async(req,res)=>{
console.log(req.user._id)

try{
  let profile = await Profile.findOneAndUpdate({ user_id: req.user._id });
  
  profile.name = req.body.name,
  profile.lastName = req.body.lastName,
  profile.school= req.body.school,
  profile.height = req.body.height,
  profile.age = req.body.age,
  profile.description = req.body.description,
  profile.user_id =  req.user._id
  
  profile = await profile.save() 
  res.send(profile)
  console.log(profile)
  // console.log(user);

  
  } catch(err){
    console.log(err)
  }
});

module.exports = router;