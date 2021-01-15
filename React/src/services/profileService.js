import axios from "axios"
import userService from "./userService";

axios.defaults.headers.common['x-auth-token'] = userService.sendToken();


export function getUserByToken(user){
  return axios.get(`http://localhost:8181/api/profile/user/${user}`);
}


export function postProfile(data){
  return axios.post("http://localhost:8181/api/profile",data)
}

export function getProfiles(){
  return axios.get("http://localhost:8181/api/profile");
}

export function getProfile(profileId){
  return axios.get(`http://localhost:8181/api/profile/${profileId}`)
}

export function updateProfile(profile){
  const profileId = profile._id;
  return axios.put(`http://localhost:8181/api/profile/${profileId}`, profile);
}

export function getProfileOfUser(userId){

return axios.get(`http://localhost:8181/api/profile/actor-single-profile/${userId}`);
}


export function getMyUser(){
  return axios.get("http://localhost:8181/api/favorites/my-user")
}



const profile = {
  getUserByToken,
  getProfiles,
  postProfile,
  getProfile,
  updateProfile,
  getProfileOfUser,
  getMyUser
  
}

export default profile;

