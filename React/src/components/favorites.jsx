import React, { Component } from 'react';
import Card from "./card";
import PageHeader from "../common/pageHeader";
import profileService from "../services/profileService";
import {Redirect} from "react-router-dom";
import userService from "../services/userService";

class Favorites extends Component {

  state = { 
    cards: [],

     myUser: {
       _id: "",
       name: "",
       email: "",
       isActor: "",
       favorites: []
     }
   }


   async componentDidMount( ){
    
    const {data} = await profileService.getProfiles();    
    this.setState({ cards: data });  
    console.log(data)


    
     const getMyUser = await profileService.getMyUser();
     const myUser = getMyUser.data;
     this.setState({myUser})
  } 
   
  


  async findCard(favorite){
    const profile = this.state.cards.find((card)=>{
      return card.user_id = favorite;
    })

    return profile;
  }
 

  render() {
    if( !userService.getToken() ) return <Redirect to="/signin" />

    const {cards, myUser} = this.state;
    
    return ( 
      
      <div className="container mt-5">
      <PageHeader Header="Favorites List" />

      

        
      {
       myUser && myUser.favorites.map((favorite)=>(

          <React.Fragment key={favorite}>
            <Card card={cards.find((card)=>{
              return card.user_id === favorite
             }
             )}
            />
          </React.Fragment>
       ))
      }
              
      <div className="row mt-5">
        <div className="col-12">
        </div>
      </div>


      </div>
      
     );
  }
}
 
export default Favorites;











// {myUser && cards && myUser.favorites.map((favorite)=>{
//   cards.find((card)=>{
//    return card.user_id === favorite     
//  }
// })

// && (
// <React.Fragment>
// <Card key = {favorite} card = {card}/>
// </React.Fragment>
// ) 
// }