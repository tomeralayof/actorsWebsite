const { string, required, ref, array } = require("@hapi/joi");
const mongoose = require("mongoose");
const Joi = require('@hapi/joi');
const profileSchema = new mongoose.Schema({

  name: {
    type: String,
    minlength:2,
    maxlength: 300,
    required: true,
  },

  lastName: {
    type: String,
    minlength:2,
    maxlength: 300,
    required: true,
  },

  school:{
    type: String,
    required: true,
  },

  height: {
    type:String
  },

  email: {
    type:String, 
    minlength:6,
    maxlength: 300,
    required: true,
    unique:true
  },

  age: {
    type:String,
    required: true,
    maxlength: 3
  },


  description: {
    type:String,
    minlength: 2,
    maxlength: 2000
    
  },

  // audition: {},
    // picture: {},

  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

});



const Profile = mongoose.model('Profile', profileSchema, 'profiles');


function validateProfile(profile){
  const schema = Joi.object({
    name: Joi.string().min(2).max(300).required(),
    lastName: Joi.string().min(2).max(300).required(),
    email: Joi.string().min(6).max(300).required().email(),
    school: Joi.string().required(),
    height: Joi.string(),
    age: Joi.string().max(3).required(),
    description: Joi.string().max(2000).min(2).required(),
  });

  return schema.validate(profile)
}


module.exports = {Profile, validateProfile}