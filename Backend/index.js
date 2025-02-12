import express from 'express'
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import userRoute from './routes/user.route.js'
import emailRoute from './routes/email.route.js'
const app=express()
dotenv.config({});  //so that procss.env._ is work
const PORT=6060;
//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOption={
    origin:'http://localhost:5174',  //connect to that only fronted requsted
    credentials:true
}
app.use(cors(corsOption))
//routes
app.use("/api/v1/user",userRoute);
app.use("/api/v1/email",emailRoute);


app.listen(PORT,()=>{
    connectDB();
    console.log(`server running at port ${PORT}`)
})