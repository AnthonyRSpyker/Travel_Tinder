const mongoose= require('mongoose');
const bcrypt= require('bcrypt');
const Schema= mongoose.Schema;

const UserSchema= new Schema({
    username: {type: String,required: true, min:8},
    password: { type: String, required: true },
    role: {type: String, enum: ['admin','user'],required: false},
    img: {type: String, required: false},
    age: {type: Number, required: false},
    gender: {type: String, required: false},
    countries: [],
    bio: {type:String, required: false},
    favs: [{
        type:Schema.Types.ObjectId,
        ref:'User'
    }],
    matches: [],
    dislikes : [{
        type:Schema.Types.ObjectId,
        ref:'User'
    }],
 
});

UserSchema.pre('save', function(next){
    if(!this.isModified('password'))
        return next();
    bcrypt.hash(this.password,10,(err,passwordHash)=>{
        if(err)
            return(next(err));
        this.password=passwordHash;
        next();
    });
});
// plain text vs hash
UserSchema.methods.comparePassword= function(passwordClient, cb) {
    bcrypt.compare(passwordClient,this.password, (err, isMatch)=>{
        if (err) 
            return cb(err);
        else{
            if(!isMatch)
                return cb(null,isMatch);
            return cb(null,this);
        }
        
    });
};

const Users = mongoose.model('User', UserSchema)

module.exports = Users; 


