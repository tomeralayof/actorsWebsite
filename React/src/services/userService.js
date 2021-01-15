// import axios from "axios";
import jwt_decode from "jwt-decode";
import axios from "axios";

// const header = axios.defaults.headers.common['x-auth-token'] = getToken();
// console.log(header);
// 
// console.log(header);

const token = "token";

export async function login(email,password){
  const {data} = await axios.post("http://localhost:8181/api/login", {email,password} );
  localStorage.setItem(token, data.token)
};


export function getToken(){
  try{
  const token =  localStorage.getItem("token");
  const decode = jwt_decode(token);
  return decode
  
   
  } catch{
    return null;
  }
}

export  function logOut(){
  const removeTok = localStorage.removeItem("token")
  return removeTok;
}

export function sendToken(){
  return localStorage.getItem(token)
}



const user = {
  getToken,
  login,
  logOut,
  sendToken,

}

export default user;