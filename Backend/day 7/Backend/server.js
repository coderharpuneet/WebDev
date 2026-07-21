require('dotenv').config();
const app=require('./src/app');
const connectDB = require('./src/config/db');

console.log(process.env.MONGO_URI);
connectDB();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});