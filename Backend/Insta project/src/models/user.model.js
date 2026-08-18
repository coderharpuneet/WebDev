const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({

     username: {
          type: String,
          required: true,
          unique: [true, "Username already exists"]
     },
     email: {
          type: String,
          required: true,
          unique: true
     },
     password: {
          type: String,
          required: [true, "Password is required"]
     },
     bio:{
          type: String,
          maxlength: 160
     },
     followers:{
          type: Array,
          default: []
     },
     profilePicture:{
          type: String,
          default: "https://ik.imagekit.io/6cfcigm3r/default-avatar-icon-of-social-media-user-vector.jpg?updatedAt=1786992069260"
     }
})

const userModel=mongoose.model("users",userSchema);

module.exports=userModel;