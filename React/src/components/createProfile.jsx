import React from 'react';
import PageHeader from "../common/pageHeader";
import Form from "../common/form";
import Joi from "joi-browser";
import profileService from "../services/profileService";
import {toast} from "react-toastify"


class CreateProfile extends Form {
  state = {  
    data: { 
     name: "",
     lastName: "",
     email: "",
     school:"",
     height: "",
     age: "",
     description: ""
    },

    errors: {}  
 }

  schema = {
    _id: Joi.string(),
    name: Joi.string().min(2).max(300).required(),
    lastName: Joi.string().min(2).max(300).required(),
    email: Joi.string().min(6).max(300).required().email(),
    school: Joi.string().required(),
    height: Joi.string(),
    age: Joi.string().max(3).required(),
    description: Joi.string().max(75).min(50).required()
   }



  //  const profileId = this.props.match.params.id;
  //  const {data} = await profileService.getProfile(profileId);
  //  this.setState({data: this.mapToView(data)})

   async componentDidMount(){
    //  const {data} = this.state
    const UserId = this.props.match.params.id;
    const {data} = await profileService.getUserByToken(UserId)
    this.setState({data: this.viewToMap(data)})
    console.log(data)
   }

   viewToMap(user){
     return {
      _id: user._id,
      email: user.email,
      name: user.name
     }
   }

  doSubmit = async () => {
    const {data} = this.state;
    console.log(data);
    await profileService.postProfile(data);
    toast(`welcome ${data.name}, your profile has beed completed successfully`);
    this.props.history.replace('/actores/profiles');
  }


  render() { 
    return ( 
      
      <div className="container mt-3 ml-5 ">
        <div className="row">
          <div className="col-12">
          <PageHeader  Header = "Complete your profile !" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-6">
          <form className="ml-3 mt-3" onSubmit={this.handleSubmit} method="POST">
            {this.renderInput('name','Firts Name')}
            {this.renderInput('lastName','Last Name')}
            {this.renderInput('email','Email', "email")}
            {this.renderInput('school','Where did you study?')}
            {this.renderInput('height','Height')}
            {this.renderInput('age','Age')}
            {this.renderInput('description','Description')}
            {this.renderButton('Done!')}
          </form>
          </div>

        

          <div className=" col-6 mt-5 ">
            <h5 className="ml-5 text-danger" >Make your best profile!</h5>
            <p className="ml-5 text-justify " > <i className="fas fa-check text-success "></i>  Lorem  sit amet consectetuadipisicing elit. Soluta, laudantium</p> 
            <p className="ml-5 text-justify " > <i className="fas fa-check text-success "></i>  Lorem  sit amet consectetuadipisicing elit. Soluta, laudantium</p> 
            <p className="ml-5 text-justify " > <i className="fas fa-check text-success "></i>  Lorem  sit amet consectetuadipisicing elit. Soluta, laudantium</p> 
            <p className="ml-5 text-justify " > <i className="fas fa-check text-success "></i>  Lorem  sit amet consectetuadipisicing elit. Soluta, laudantium</p>
            <img  style={{
              width: "400px",
              height:"200px",
              marginLeft: "40px",
              marginTop: "20px"
            }} 
            src="https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt=""/>

          </div>
        </div>



<div className="row mt-5">
  <div className="col-12">

  </div>
</div>
      </div>
     );
  }
}
 
export default CreateProfile;