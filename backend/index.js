import express, { urlencoded } from 'express';
import dotenv from "dotenv";
import connectDB from './config/database.js';
import userRoute from './routes/userRoute.js' ;
import messageRoute from './routes/messageRoute.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { server } from './socket/socket.js';

dotenv.config({});
const PORT=process.env.PORT||5000;
const app= express();
//midllewares
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(express.json())

const corsOrigin={
    origin:'http://localhost:3000',
    credentials:true
};
app.use(cors(corsOrigin))

//routes
app. use("/api/v1/user",userRoute);
app.use("/api/v1/message",messageRoute)



app.listen(PORT,()=>{
    connectDB();  
    console.log(`Server listen at port ${PORT}`);
})