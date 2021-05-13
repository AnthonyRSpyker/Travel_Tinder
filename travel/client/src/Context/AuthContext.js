import React, {createContext,useState,useEffect} from 'react';
import AuthService from '../Service/AuthService';



export const AuthContext=createContext();

export default ({children})=>{
    const [user,setUser]= useState(null);
    const [isAuthenticated,setIsAuthenticated]= useState(false); // see if user is authenticated
    const [isLoaded,setIsLoaded]= useState(true); // to see if app is loaded,

    useEffect(()=>{
        AuthService.isAuthenticated().then(data=>{
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    }, []);
 //setting global state
    return (
        <div>
            {!isLoaded ? <h1>Loading</h1>:
            <AuthContext.Provider value={{user,setUser, isAuthenticated,setIsAuthenticated}}> 
                {children}
            </AuthContext.Provider>}
        </div>
    )
}