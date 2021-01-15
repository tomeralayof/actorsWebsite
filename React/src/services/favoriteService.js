import axios from "axios";
import userService from "./userService";


axios.defaults.headers.common['x-auth-token'] = userService.sendToken();

export function getMyUser(myId){
  return axios.get(`http://localhost:8181/api/users/${myId}`);
};


export function updateUserFavorites(userId){
  return axios.patch(`http://localhost:8181/api/users/${userId}`);
};


export function deleteDingleUserFromFavorite(userId){
  return axios.delete(`http://localhost:8181/api/users/${userId}`);
};

export function getFavoritesList(){
  return axios.get("http://localhost:8181/api/favorites");
}




const getFavorites = {
  updateUserFavorites,
  getMyUser,
  deleteDingleUserFromFavorite,
  getFavoritesList
};

export default  getFavorites;