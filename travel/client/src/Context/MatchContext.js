import React, { createContext, useReducer, useContext } from "react";


const MatchesContext=createContext({
    id: "",
    name: "",
    priority: false
});

const{Provider}=MatchesContext;

function reducer(state,action){
    switch (action.type) {
        case "like":
            
            break;
    
        default:
            break;
    }
}

function MatchesProvider({value=[],...props}){
    const [state,dispatch]=useReducer(reducer,[]);

    return<Provider value={[state,dispatch]} {...props} />;

}

function useMatchesContext(){
    return useContext(MatchesContext);
}

export{MatchesProvider,useMatchesContext}