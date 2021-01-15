import React, { Component } from 'react';
import Navbar from "./components/navbar";

//accsess for not-logged users
import Home from "./components/home";
import SignIn from "./components/signin";
import About from "./components/about";
import Actors from "./components/actores";
import Directors from "./components/directors";


//access only for actors
import CreateProfile from "./components/createProfile";
import MyProfile from "./components/myProfile";
import Edit from "./components/edit";


//access only for directires
import Favorites from "./components/favorites";

// profile - accsess for both actors and directores
import Profiles from "./components/profiles";
import LogOut from "./components/logout";


import {Switch,Route} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userService from './services/userService';

import ProtectedRoute from "./components/protectedRoute";


class App extends Component {

  state = {  }

 async componentDidMount(){
     let userLogged = userService.getToken();
     this.setState({ userLogged });
  }


  render() { 

    const {userLogged} = this.state

    return ( 
     <div>
       <ToastContainer/>
       <header>
         <Navbar userLogged={userLogged} />
       </header>

       <main>
         <Switch>
         <ProtectedRoute path="/create-profile" exact component={CreateProfile} isActor={true} />
         <ProtectedRoute path="/edit" exact component={Edit} isActor={true}/>
         <Route path="/my-profile/:id" exact component={MyProfile}  />


         
         <Route userLogged={userLogged} path="/favorites/:id" exact component={Favorites}/>

          <Route path="/logout" exact component={LogOut}/>
          <Route path="/actores/profiles" exact component={Profiles}/>
          <Route path="/signin" exact component={SignIn}/>
          <Route path="/directors" exact component={Directors}/>
          <Route path="/actors" exact component={Actors}/>
          <Route path="/about" exact component={About}/>
          <Route path="/" exact component={Home}/>
         </Switch>
       </main>


       <footer>
         {/* <TestNav/> */}
       </footer>
     </div>
     );
  }
}
 
export default App;





// axios.defaults.headers.common['x-auth-token'] = userService.getJWT();
