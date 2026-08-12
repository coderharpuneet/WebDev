const app=require('./src/app');
const connectDB=require('./src/config/database');
const dotenv=require('dotenv');
dotenv.config();

connectDB();
console.log(process.env.JWT_SECRET);
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});