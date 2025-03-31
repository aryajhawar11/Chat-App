import express from 'express';
import dotenv from "dotenv";
import connectDB from './config/database.js';
import userRoute from './routes/userRoute.js' ;
import messageRoute from './routes/messageRoute.js'
import cookieParser from 'cookie-parser';

dotenv.config({});
const app= express();
app.use(cookieParser());
const PORT=process.env.PORT||5000;

app.use(express.json())
//routes
app. use("/api/v1/user",userRoute);
app.use("/api/v1/message",messageRoute)







app.listen(PORT,()=>{
    connectDB();  
    console.log(`Server listen at port ${PORT}`);
})