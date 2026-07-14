const app=require('./src/app');
const mongoose=require('mongoose');
const port=3000;

function connectDB(){
     mongoose.connect('mongodb+srv://sidak:wXpM7HM43xYhSGW1@cluster0.2bxtzro.mongodb.net/')
     .then(()=>{
          console.log('Connected to MongoDB');
     })
}
connectDB();
app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
});