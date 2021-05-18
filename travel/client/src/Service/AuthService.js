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
        return fetch('/api/user/signup',{
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': "application/json"
            }
        })
    },
    logout: ()=>{
        return fetch('/user/logout')
            .then(res=>res.json())
            .then(data=>data);
    },
    isAuthenticated: ()=>{
        return new Promise((resolve, reject) => {
            resolve(true);

          });
        //TODO Get this to work later right now return true to move on with life :)
        return fetch ('/user/authenticated')
            .then(res=>{
                if(res.status!==401)
                    return res.json().then(data=>data);
                else
                    return{isAuthenticated: false, user: {username: "", role:""}}
            });
    }
}