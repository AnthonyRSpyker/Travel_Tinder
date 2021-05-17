const db= require('../models/sing-in');

module.exports={
    store(req,res){
        const {userId}= req.params;
        const {username}= req.headers;

        const authUser=db.findById(username);
        const disUser=db.findById(userId);

        if(!disUser){
            return res.status(400).json({Error: 'User does not exist'});
        }
        authUser.dislikes.push(disUser._id);

        authUser.save()

        return res.json(authUser)
    }
};