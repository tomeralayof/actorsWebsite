import React from 'react';
import PageHeader from "../common/pageHeader";
import Form from "../common/form";
import Joi from "joi-browser";
import axios from "axios";
import {toast} from "react-toastify";
import userService from "../services/userService";
import {Redirect} from "react-router-dom";


class Directors extends Form {
  state = { 
    data: {name: '', email: '', password: ''},
    errors: {}
   }

   
  schema = {
    name: Joi.string().min(2).max(300).required(),
    email: Joi.string().min(6).max(300).required(),
    password: Joi.string().min(7).max(300).required()
   }


   doSubmit = async () =>{
    const data = {...this.state.data}
    data.isActor = false
    data.favorites = ["id of user number 1", "id of user number 2"]
    const {email,password} = this.state.data
    try{
      // await http.post(`${apiUrl}/users`, data);
      await axios.post('http://localhost:8181/api/users', data)
      toast( `Welcome ${data.name} your account has been created succsesfully`);
      await userService.login(email,password);
      window.location = "/actores/profiles";


  //  await userService.createUser(data)

    } catch(ex){
      if(ex.response && ex.response.status === 400){
        this.setState({errors: {email:"email is already exist or invalid"}});
      }
    }
  }



  render() { 
    if(userService.getToken()) return <Redirect to ="/actores/profiles" />

    return ( 
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-6">
          <PageHeader Header="Directors Registration" />

              <form  className="ml-3" onSubmit={this.handleSubmit} method="POST">
             {this.renderInput('name','Name')}
            {this.renderInput('email','Email', 'email')}
            {this.renderInput('password','Password', 'password')}
             {this.renderButton('Start Now!')} 
              </form> 


            
          </div>
          <div className="col-6">
            <h4>some information</h4>
            <p className="text-justify">
            <i>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni natus ut assumenda perferendis repellat debitis officiis sunt consectetur odio possimus, nihil ducimus reprehenderit fugiat provident hic. Quidem laborum cupiditate, assumenda nemo, molestias quibusdam eos unde hic non doloremque commodi maxime cumque voluptatem. Libero labore inventore odio totam exercitationem ipsa quo consequatur rem pariatur, ducimus quas quis natus tempora ratione aspernatur commodi molestiae eveniet perferendis, nihil sit dignissimos beatae necessitatibus. Eligendi, voluptatibus? Similique iusto velit eos dicta quisquam voluptatum incidunt quo, inventore voluptatem facilis assumenda provident exercitationem laborum excepturi ut deleniti illum quos et quia, animi maiores accusantium ullam autem. Quaerat.
            </i>
            </p>
          </div>
        </div>

      </div>
     );
  }
}
 
export default Directors;






// {/* <form  className="ml-3" onSubmit={this.handleSubmit} method="POST">
// {this.renderInput('name','Name')}
// {this.renderInput('email','Email', 'email')}
// {this.renderInput('password','Password', 'password')}
//  {this.renderButton('Start Now!')} 
// </form> */}