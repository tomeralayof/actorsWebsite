const express = require('express');
const router = express.Router();
const {User, validateUser} = require('./../modules/user');
const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');

router.post("/", async (req,res)=>{
  const {error} = validatePattern(req.body);
  if(error) return res.status(400).send(error.details[0].message)

  const validateEmail = await User.findOne({email: req.body.email});
  if(!validateEmail) return res.status(400).send("Invalide email or password, please try again")

  const validatePassword = await bcrypt.compare(req.body.password, validateEmail.password);
  if(!validatePassword) return res.status(400).send("Invalide email or password, please try again");

  res.send({token: validateEmail.createToken()});
})


function validatePattern(login){
  const schema = Joi.object({
    email: Joi.string().min(6).max(300).required().email(),
    password: Joi.string().min(7).max(300).required(),
  })
  return schema.validate(login)

}


module.exports = router