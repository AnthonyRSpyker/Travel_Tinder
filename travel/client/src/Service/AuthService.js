export default {
    signin: user=>{
        return fetch('/user/signin',{
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': "application/json"
            }
        }) .then(res=>res.json())
           .then(data=>data);
    },

    signup: user=>{
        return fetch('/user/signup',{
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': "application/json"
            }
        }) .then(res=>res.json())
           .then(data=>data);
    },
    logout: ()=>{
        return fetch('/user/logout')
            .then(res=>res.json())
            .then(data=>data);
    },
    isAuthenticated: ()=>{
        return fetch ('/user/authenticated')
            .then(res=>{
                if(res.status!==401)
                    return res.json().then(data=>data);
                else
                    return{isAuthenticated: false, user: {username: "", role:""}}
            });
    }
}