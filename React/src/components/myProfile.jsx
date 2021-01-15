import React, { Component } from 'react';
import "../styles/myProfile.css";
import profileService from "../services/profileService";

class MyProfile extends Component {
//data from profileservice

  state = { 
    
    data:[]
    
   }


 async componentDidMount(){

  const userId = this.props.match.params.id
  // console.log(userId)
 const {data} = await profileService.getProfileOfUser(userId)
 this.setState({data:data}) 
//  console.log(data)

 }


  render() { 
    const {data} = this.state
    // console.log(data)
    
    
    return (

      <div className="container mt-5">

        {/* first row */}
        <div className="row">
          <div className=" pic col-6">
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' className="card-img-top" alt=""/>  
          </div>

          <div className=" desc col-6">
            <h1 className="name mt-4" >Description :</h1>
            <p className=" mt-3 description text-justify"> {data.description} </p>
          </div>

        </div>
        {/* first row end */}



        {/* second row */}
        <div className="row">
          <div className="col-6">
      <div className="card">
      <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p  className="mt-1 card-text"> <i className="fas fa-signature"></i> <b>Full Name:</b> {data.name} {data.lastName} </p>
      <p><i className="fas fa-child"></i> <b>Age:</b>{data.age} </p>
      <p><i className="fas fa-arrows-alt-v"></i><b> Height:</b> {data.height}</p>

      <p><i className="fas fa-school"></i> <b>School:</b> {data.school} </p>
      <p className="text-primary"><i className="far fa-envelope"></i> <b>Email:</b> {data.email} </p>
  </div>
   
  </div>
   </div>


<div className="col-6">
{/* <React.Fragment> 
<iframe  className="video" width="644" height="362" src="https://www.youtube.com/embed/d60H5D9GefE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> 

 </iframe> 
 </React.Fragment>  */}
</div>
</div>

{/* empty line  */}
<div className="row mt-5">
  <div className="col-12">
  </div>

</div>
</div>   
         
);
       
}
}
 
export default MyProfile;


