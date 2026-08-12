const express=require('express');

const authRouter=express.Router();
const userModel=require('../models/user.model');
const jwt = require('jsonwebtoken')

authRouter.post('/register',async (req,res)=>{
     const {name,email,password}=req.body;
     const isUserExist=await userModel.findOne({email});
     if(isUserExist){
          return res.status(409).json({
               message:'User with this email already exists'
          });
     }
     const hash=crypto.createHash("md5").update(password).digest("hex");
     const user=await userModel.create({name,email,password:hash});
     const token=jwt.sign(
          {
               id:user._id
          },
          process.env.JWT_SECRET,
          {
               expiresIn:'1h'
          });
     res.status(201).json({
          message:'User registered successfully',
          user
     }
     );
});

authRouter.post('/protected',async (req,res)=>{
     console.log(req.cookies);
     res.status(200).json({
          message:'This is a protected route'
     });
});

authRouter.post('/login',async (req,res)=>{
     const {email,password}=req.body;
     const user=await userModel.findOne({email});
     if(!user){
          return res.status(404).json({
               message:'User not found'
          });
     }
     const hash=crypto.createHash("md5").update(password).digest("hex");
     const isPasswordMatch=user.password===hash;
     if(!isPasswordMatch){
          return res.status(401).json({
               message:'Invalid credentials'
          });
     }
     const token=jwt.sign(
          {
               id:user._id
          },
          process.env.JWT_SECRET,
          {
               expiresIn:'1h'
          });
     res.status(200).json({
          message:'Login successful',
          token
     });
});

module.exports=authRouter;