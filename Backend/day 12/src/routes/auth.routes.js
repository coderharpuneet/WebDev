const express=require('express');

const appRouter=express.Router();
const userModel=require('../models/user.model');

appRouter.post('/register',async (req,res)=>{
     const {name,email,password}=req.body;
     const isUserExist=await userModel.findOne({email});
     if(isUserExist){
          return res.status(400).json({
               message:'User with this email already exists'
          });
     }
     const user=await userModel.create({name,email,password});
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

module.exports=appRouter;