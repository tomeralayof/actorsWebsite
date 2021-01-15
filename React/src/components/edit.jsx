import React from 'react';
import PageHeader from "../common/pageHeader";
import Form from "../common/form";
import Joi from "joi-browser";
import profileService from "../services/profileService";
import {toast} from "react-toastify"



class Edit extends Form {
  state = { 
    data: { 
      name: "",
     lastName: "",
    //  email: "",
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
    // email: Joi.string().min(6).max(300).required().email(),
    school: Joi.string().required(),
    height: Joi.string(),
    age: Joi.string().max(3).required(),
    description: Joi.string().max(75).min(50).required()
   }


    async componentDidMount(){
      const profileId = this.props.match.params.id;
      console.log(profileId);

      const {data} = await profileService.getProfile(profileId);
      console.log(data);

      this.setState({data: this.mapToView(data)})
      // console.log(data)
  

   }

   mapToView(profile){
     return{
       _id: profile._id,
       name: profile.name,
       lastName: profile.lastName,
      //  email: profile.email,
       school: profile.school,
       height: profile.height,
       age: profile.age,
       description: profile.description
     }
   }





  doSubmit = async () => {
    const { data } = this.state;
    await profileService.updateProfile(data);
    toast(`${data.name}, your profile has been updated successfully`)
    this.props.history.replace('/actores/profiles');
  }
   




  render() { 
    return ( 
<div className="container mt-3 ml-5 ">
  <div className="row">
    <div className="col-12">
      <PageHeader  Header = "Update your profile !" />
    </div>
  </div>

  <div className="row mt-3 mb-5">
    <div className="col-6">
    <form className="ml-3 mt-3" onSubmit={this.handleSubmit} method="POST">
          {this.renderInput('name','Firts Name')}
          {this.renderInput('lastName','Last Name')}
          {/* {this.renderInput('email','Email', "email")  } */}
          {this.renderInput('school','Where did you study?')}
          {this.renderInput('height','Height')}
          {this.renderInput('age','Age')}
          {this.renderInput('description','Description')}
          {this.renderButton('Done!')}
    </form>

    </div>
  </div>

</div>
     );
  }
}
 
export default Edit;