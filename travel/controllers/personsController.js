const db = require('../models')


module.exports={
    async index(req,res){
        const {username}=req.headers;
        const authUser= await db.findById(username);

        const users= await db.find({
            $and:[
                {_id:{$ne: username}},
                {_id: {$nin: authUser.favs}},
                {_id: {$nin: authUser.dislikes}}
            ]
        });

        return res.json(users);
    },
    async store(req,res) {
        const {user}= req.body;
        const userActive= await db.findOne({
            username:user
        })
        if(userActive)
            return res.json(userActive);
        
        const {img, age,gender, bio}= data;

        const userNew= db.create({
            username:user,
            img,
            age,
            gender,
            bio

        })

        return res.json(userNew);
        

    }
}
