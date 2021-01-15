import React, { Component } from 'react';
import {Link,NavLink} from "react-router-dom"


class Navbar extends Component {
  state = {  }
  render() {
    const {userLogged} = this.props
 
    return ( 

      <nav className="navbar navbar-expand-lg navbar-Info bg-dark">
      <div className="container">


 {/* app name for unlogged starts */}
 {!userLogged && (
   <React.Fragment>
<Link className="navbar-brand" to="/">Audition App</Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
</React.Fragment>
)}
{/* app name for logged starts */}


{/* profile access */}
{userLogged && userLogged.isActor && (
  <React.Fragment>
<Link className="navbar-brand" to={`/my-profile/${userLogged._id}`}>{userLogged.name.toUpperCase()}</Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
</React.Fragment>
) }
{/* profile ends */}


{/* COMUNICATION FOR Directors starts */}
{userLogged && !userLogged.isActor && (
  <React.Fragment>
<Link className="navbar-brand" to="/actores/profiles">Communication</Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
</React.Fragment>
) }
{/* comunication for directors end */}


<div className="collapse navbar-collapse" id="navbarSupportedContent">

  <ul className="navbar-nav mr-auto">

   
      
    {/* about us and sign in starts */}
    {!userLogged &&  (
      <React.Fragment>
    <li className="nav-item active">
      <NavLink className="nav-link" to="/about"><i className="fas fa-info-circle"></i> About us <span className="sr-only">(current)</span></NavLink>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/signin"><i className="fas fa-sign-in-alt"></i> Sign in</Link>
    </li>
   
    <li className="nav-item">
    </li>
    </React.Fragment>
    )}
    {/* about us and sign in end */}

  </ul>
 
      <ul className="navbar-nav ml-auto">

    {/* sign up starts  */}
      {!userLogged && (
        <React.Fragment>
      <li className="nav-item active">
      <Link className="nav-link" to="/actors">Actors <span className="sr-only">(current)</span></Link>
    </li>
    <span className="mt-2 text-danger"><i className="fas fa-arrows-alt-h"></i></span>
    <li className="nav-item">
      <Link className="nav-link" to="/directors">Directors</Link>
    </li>
    </React.Fragment>
      )}
    {/* sign up ends */}


      {/* Actors dropdown dropDown start */}

      {userLogged && userLogged.isActor && (
    <li className="nav-item dropdown mr-5">
   <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Settings 
  </Link>

   {/* acces for actors only starts */}
   
 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
   <Link className="dropdown-item" to={`/my-profile/${userLogged._id}`}> <i className="far fa-user-circle"></i> My Profile </Link>
   <Link className="dropdown-item" to="/edit"> <i className="fas fa-edit"></i>Update profile </Link>
   {/* acces only for actors end */}


   <Link className="dropdown-item" to="/actores/profiles"> <i className="fas fa-users"></i> Communication</Link>
   <Link className="dropdown-item" to="/favorites/:id"> <i className="far fa-star"></i>

Favorites</Link>
   <div className="dropdown-divider"></div>
   <Link className="dropdown-item" to="/logout"> <i className="fas fa-sign-out-alt"></i> Log Out</Link>
 </div>
 </li>
  )}

 {/* dropDown for actors end */}

       


  {/* dropdown for Directors */}

        {userLogged && !userLogged.isActor && (
          <React.Fragment>
    <li className="nav-item dropdown mr-5">
    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {userLogged.name.toUpperCase()}
  </Link>

  <div className="dropdown-menu" aria-labelledby="navbarDropdown">


{/* to={`/my-profile/${userLogged._id}`} */}
{/* /actores/profiles */}
{/* /${userLogged._id}` */}

  <Link className="dropdown-item" to={`/actores/profiles`}> <i className="fas fa-users"></i> Communication</Link>
  <Link className="dropdown-item" to="/favorites"> <i className="far fa-star"></i>

Favorites</Link>
   <div className="dropdown-divider"></div>
   <Link className="dropdown-item" to="/logout"> <i className="fas fa-sign-out-alt"></i> Log Out</Link>



   </div>

   </li>
   </React.Fragment>


    ) }

  {/* dropdown for directors end */}




  
   </ul>
       




</div>
</div>
</nav>


     );
  }

  
}
 
export default Navbar;













//       <nav className="navbar navbar-expand-lg navbar-Info bg-dark">
//       <div className="container">


//     <div className="container-fluid">
//     <Link className="navbar-brand" to="/">Audition App</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav mr-auto">


//         <li className="nav-item">
//         <Link className="nav-link" aria-current="page" to="/about"> <i className="fas fa-info-circle"></i> About Us</Link>



//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/signin"> <i className="fas fa-sign-in-alt"></i> Sign in</Link>
//         </li>
//         </ul>

//         <ul className="navbar-nav ml-auto">

//         <li className="nav-item">
//           <Link className="nav-link" to="/actors">Actors</Link>
//         </li>
//         <span className="mt-2 text-danger"><i className="fas fa-arrows-alt-h"></i></span>
//         <li className="nav-item">
//           <Link className="nav-link" to="/directors" aria-disabled="true">Directors</Link>
//         </li>
//         </ul>


//     </div>
//   </div>
//   </div>

// </nav>