import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../Service/AuthService';
import { AuthContext } from '../../Context/AuthContext';
import "./Navbar.css"



const Navbar=props=>{
  const {isAuthenticated,user,setIsAuthenticated,setUser}=useContext(AuthContext);
  
  const onClickLogOutHandler=()=>{
    AuthService.logout().then(data=>{
        if(data.success){
            setUser(data.user);
            setIsAuthenticated(false);
        }
    });
}
const unauthenticatedNavBar=()=>{
    return (
        <>
        <Link to="/">
            <li className="nav-item nav-link">Home-</li>
        </Link>
        <Link to="/signin">
            <li className="nav-item nav-link">Sign In-</li>
        </Link>
        <Link to="/signup">
            <li className="nav-item nav-link">Sign Up-</li>
        </Link>

        </>
    )
}
const authenticatedNavBar=()=>{
    return (

        <>
        <Link to="/">
          <li  onClick={onClickLogOutHandler} className="link"><i class="fa fa-facebook" aria-hidden="true"></i>Log out</li>
        </Link>
        <Link to="/matches">
        <li className="link"><i class="fa fa-instagram" aria-hidden="true"></i>Matches</li>
        </Link>
        <Link to="/profile">
        <li className="link"><i class="fa fa-pinterest-p" aria-hidden="true"></i>Profile</li>
        </Link>
        {
            user.role="admin" ?
            <Link to="/admin">
            <li className="link">Admin</li>
        </Link> : null
        }
        
        
        </>

    )
}
return (
    
        <div className="top-bar">
        <ul class="menu">
        <li class="menu-text">Travel Buddies:</li>
        {!isAuthenticated ? unauthenticatedNavBar(): authenticatedNavBar()}
      </ul>
            
        </div>
    
)

}

export default Navbar;


