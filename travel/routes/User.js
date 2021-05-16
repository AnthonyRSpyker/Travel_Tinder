const express= require('express');
const userRouter=express.Router();
const passport= require('passport');
const passportConfig=require('../config/passport');
const JWT=require('jsonwebtoken')
const User= require('../models/sing-in');


const signToken= userID=>{
    return JWT.sign({
        iss: "MimiT",
        sub: userID
    }, "MimiKey", {expiresIn: "1h"});
}


userRouter.post('/signup', (req,res)=>{
    const{username,password,role,img,age,gender,countries,bio}=req.body;
    User.findOne({username},(err,user)=>{
        if(err)
            res.status(500).json({message: {msgBody: "Error has occured", msgError: true}});
        if(user)
            res.status(400).json({message: {msgBody: "Username Already Taken", msgError: true}});
        else{
            const newUser= new User({username,password,role,img,age,gender,countries,bio});
            newUser.save(err=>{
                if(err)
                    res.status(500).json({message: {msgBody: "Error has occured", msgError: true}});
                else
                    res.status(201).json({message: {msgBody: "Sucessfully Created Account", msgError: false}});
                

            })
        }
    })
});

userRouter.post('/signin',passport.authenticate('local',{session: false}),(req,res) =>{
    if(req.isAuthenticated()){
        const {_id,username,role}=req.user;
        const token= signToken(_id);
        //httpOnly on client side- cannot use JS on cookie, sameSite: prevent crosssite request foragey attacks
        res.cookie('access_token',token,{httpOnly: true, sameSite: true});
        res.status(200).json({isAuthenticated:true, user:{username,role}});
    }
});

userRouter.get('/logout',passport.authenticate('jwt',{session: false}),(req,res) =>{
    res.clearCookie('access_token');
    res.json({user:{username:"",role:""},success:true});
});


userRouter.get('/admin',passport.authenticate('jwt',{session:false}), (req,res)=>{
    if(req.user.role==='admin'){
        res.status(200).json({message: {msgBody: "You are andAdmin", msgError:false}});

    }
    else
        res.status(403).json({message: {msgBody: "You are not authroized to view this page", msgError: true}})
});

userRouter.get('/authenticated', passport.authenticate('jwt', {session:false}), (req,res)=>{
    const {username,role}=req.user;
    res.status(200).json({isAuthenticated:true, user: {username,role}})
});

//userRouter.post('/signupform',passport.authenticate('jwt',{session:false}), (req,res)=>{
  //  const signUp= new Signup(req.body);
  //signUp.save(err=>{
      //if err
    //else{ req.user.signUps.push(signUp)}
 // })
//})



module.exports=userRouter;