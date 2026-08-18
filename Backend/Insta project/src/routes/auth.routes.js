const express=require("express");
const crypto=require("crypto");
const userModel=require("../models/user.model");
const jwt=require("jsonwebtoken");

const authRouter=express.Router();

authRouter.post("/register",async (req,res)=>{
     const {username,email,password,bio,profileImage}=req.body;
     // const isUserExist=await userModel.findOne({email});
     // if(isUserExist){
     //      return res.status(409).json({
     //           message:"User already exists"
     //      });
     // }

     // const isUserExistByUsername=await userModel.findOne({username});
     // if(isUserExistByUsername){
     //      return res.status(409).json({
     //           message:"Username already exists"
     //      });
     // }
     const isUserExists=await userModel.findOne({$or:[{email},{username}]});
     if(isUserExists){
          return res.status(409).json({
               message:"User already exists"
          });
     }
     const hash=crypto.createHash('sha256').update(password).digest('hex'); 
     const user= await userModel.create({
          username,
          email,
          password:hash,
          bio,
          profilePicture:profileImage
     });

     /**
      *  - user ka data hona chahiye 
      *  - data unique hona chahiye
      */
     const token=jwt.sign({
          id:user._id,
     },process.env.JWT_SECRET,{
          expiresIn:"1d"
     })
     res.cookie("token",token);
     res.status(201).json({
          message:"User registered successfully",
          user:{
               email:user.email,
               username:user.username,
               bio:user.bio,
               profilePicture:user.profilePicture
          }
     });
});


authRouter.post("/login",async (req,res)=>{
     const {username,email,password}=req.body;
     const user=await userModel.findOne({$or:[{email},{username}]});
     if(!user){
          return res.status(404).json({
               message:"User not found"
          });
     }
     const hash=crypto.createHash('sha256').update(password).digest('hex');
     const isMatch=hash===user.password;
     if(!isMatch){
          return res.status(401).json({
               message:"Invalid credentials"
          });
     }
     const token=jwt.sign({
          id:user._id,
     },process.env.JWT_SECRET,{
          expiresIn:"1d"
     })
     res.cookie("token",token);
     res.status(200).json({
          message:"User logged in successfully",
          user:{
               email:user.email,
               username:user.username,
               bio:user.bio,
               profilePicture:user.profilePicture
          }
     });
});

module.exports=authRouter;