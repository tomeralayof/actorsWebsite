import  { Component } from 'react';
import userService from "../services/userService";

class LogOut extends Component {
  state = {  }

  componentDidMount(){
  const logOut =  userService.logOut();
    this.setState({logOut})
    window.location = "/signin"; 
  }

  render() { 
    return ( null );
  }
}
 
export default LogOut;