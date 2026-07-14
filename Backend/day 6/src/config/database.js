const mongoose=require('mongoose');

function connectDB(){
     mongoose.connect('mongodb+srv://sidak:fLGGaUPNrbh7zfc8@cluster0.v8z9shl.mongodb.net/day6')
     .then(()=>{
          console.log('Database connected');
     })
}

module.exports=connectDB;