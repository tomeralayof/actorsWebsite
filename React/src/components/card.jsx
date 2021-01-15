import React,{Component} from 'react';
import {Link} from "react-router-dom";
import "./card";
import favoriteService from "../services/favoriteService";


class Card extends Component {

state = { }

  async updateArrayOfUser(userId){
  await favoriteService.updateUserFavorites(userId);

  const {myId} = this.props;
  const user = await favoriteService.getMyUser(myId);
  this.props.settingState(user.data);  
};


  async delete(userId){
  await favoriteService.deleteDingleUserFromFavorite(userId);

  const {myId} = this.props;
  const user = await favoriteService.getMyUser(myId);
  this.props.settingState(user.data);
}


render(){

  const { card , user, userLogged } = this.props;
    
  return ( 
    <div className="card mt-5">
    <div className="row">
    <div className="col-4">
    <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' className="card-img-top" alt=""/>
    </div>

    <div className="col-4 mt-4">
    <p className="text-justify"><b>description: </b> {card.description} </p>
    </div>

    <div className=" borderr col-4">
      <div>         
         <p className="mt-3"><b>Actor Information:</b> <Link to={`/my-profile/${card.user_id}`}>
           my profile 
         </Link> 
  
   

    { userLogged && (card.user_id !== userLogged._id ) && user && card && !user.favorites.includes(card.user_id)  && (
      <React.Fragment>
      <button className = "btn btn-danger" onClick = { () => this.updateArrayOfUser(card.user_id) } >
      <span>add to favorites</span>
      </button>
      </React.Fragment>
    )}   


   { user && card && user.favorites.includes(card.user_id) && (
     <React.Fragment>
     <button className = "btn btn-success" onClick = { () => this.delete(card.user_id) } > delete from favorite 
     </button>
     </React.Fragment>
   )}
                               
        
          </p>
         <hr/>
         </div>
      <p className="mt-1">  <i className="fas fa-signature"></i> <b>Full Name:</b> {card.name} {card.lastName} </p>
      <p><i className="fas fa-child"></i> <b>Age:</b> {card.age}</p>
      <p><i className="fas fa-arrows-alt-v"></i><b> Height:</b> {card.height}</p>

      <p><i className="fas fa-school"></i> <b>School:</b> {card.school} </p>
      <p className="text-primary"><i className="far fa-envelope"></i> <b>Email:</b> {card.email} </p>
      

    </div>
    </div>
    </div>

     )
    }
  };
 
export default Card;