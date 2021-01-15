import React, { Component } from 'react';
import userService from "../services/userService";
import {Redirect} from "react-router-dom";
import "../styles/card.css"
import Card from "./card";
import profileService from "../services/profileService";
import favoriteService from "../services/favoriteService";


class Profiles extends Component {
  state = { 
    user: {
      name: '',
      email: '',
      password: '',
      isActor: '',
      favorites: []
    
  },
    cards: [  ],

   };

 async componentDidMount(){   
  const {data} = await profileService.getProfiles();
  this.setState({ cards: data });

  const myId = this.props.match.params.id;  
  const user = await favoriteService.getMyUser(myId) ;
  this.setState({ user:this.mapToView(user.data) });

  let userLogged =  userService.getToken();
  this.setState({ userLogged });
} 

mapToView(data){
  return {
    _id: data._id,
    email: data.email,
    password: data.password,
    isActor: data.isActor,
    favorites: data.favorites
  }
};


settingState(data){
console.log(data)
const user = {
  _id: data._id,
  email: data.email,
  password: data.password,
  isActor: data.isActor,
  favorites: data.favorites
}
    this.setState({user})
}



 updateArrayOfUser = () => { }

    
  render() { 
    const {cards, user , userLogged} = this.state;
    const myId = this.props.match.params.id;  
    

    if( !userService.getToken() ) return <Redirect to="/signin" />
    return (

      <div className="container mt-5">
        
      {cards.map((card)=>{
      return <Card 

      key={card._id} 
      card={card}
      updateArrayOfUser = { this.updateArrayOfUser() }  
      user = {user}  
      myId = {myId}
      settingState = { (data) => this.settingState(data) }
      userLogged = {userLogged}
      />

      })}


      <div className="row mt-5">
        <div className="col-12">
        </div>
      </div>

        
              
      </div>     
      
     );
    }

  };

 export default Profiles;