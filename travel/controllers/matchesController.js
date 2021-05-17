const db = require('../models/sing-in');

module.exports ={
    store(req,res){
        const {userId}=req.params;
        const {username}= req.headers;

        const authUser=db.findById(username);
        const likeUser=db.findById(userId);

        if(!likeUser){
            return res.status(400).json({error: 'User does not exist'})
        }

        if(likeUser.favs.includes(authUser._id)){
            authUser.favs.push(likeUser._id)
            authUser.save();

            return res.json(authUser);
        }
    }
     

};