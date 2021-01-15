import React from 'react';
import PageHeader from "../common/pageHeader";
import Form from "../common/form";
import Joi from "joi-browser";
import axios from "axios";
import userService from "../services/userService";
import {Redirect} from "react-router-dom";
// import http from "../services/httpService"
//only if user is unlogged
//if user logged redirect to profiles component.

class SignIn extends Form {
  state = {  }

  state = { 
    data: { email: '', password: ''},
    errors: {}
   }

    
  schema = {
    email: Joi.string().min(6).max(300).required().email(),
    password: Joi.string().min(7).max(300).required()

   }

   doSubmit = async () =>{

    const {email,password} = this.state.data

     try{
      const {data} = await axios.post('http://localhost:8181/api/login',{email,password});
      await localStorage.setItem("token", data.token );
      window.location = "/actores/profiles";
      console.log(data);
      
     } catch(ex){
       if (ex.response && ex.response.status === 400) {
         this.setState({errors: {email: "invalid email or password"}})
       }
     }
   }

  render() { 
    if(userService.getToken()) return <Redirect to ="/actores/profiles" />
    return ( 
      <div className="container mt-3">
        <div className="row mt-5">
          <div className="col-6">
          </div>
        </div>

      <div className="row">
        <div className="col-6">
          <PageHeader Header="Sign In" />

        <form className="ml-3 mt-3" onSubmit={this.handleSubmit} method="POST">
          {this.renderInput('email','Email', 'email')}
          {this.renderInput('password','Password', 'password')}
         {this.renderButton('Sign In')} 
         </form>
         <h5 className="ml-3 mt-3 text-danger "> <b> Important information    <i className="fas fa-exclamation-triangle"></i></b></h5>
         <p className="ml-3 text-justify">The profile setting is permited for actors only, directors can register the app for watching actors profiles, get a full perspective about the candident and add him to a favorite list as well as inviting the actor for an auditon but cant add their own profile .</p>
        </div>
        <div className="col-6 mr-auto">
         
         <img src="https://images.unsplash.com/photo-1518929301966-019439ed8149?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1936&q=80" className="img-thumbnail" alt=""/>


        </div>
      </div>


        <div className="row">
          <div className="col-5">


          </div>


        </div>
      </div>
     );
  }
}
 
export default SignIn;