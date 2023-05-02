// Dotenv
import dotenv from 'dotenv'    
dotenv.config()   
import express from "express";
import cors from 'cors';    //Solving errors while connecting --back end to front end.
import newUser from "./routes/newUser.js"
import loggeduser from "./routes/loggeduser.js"
import authenticateUser from './utils/middleware.js';

import cookieParser from 'cookie-parser';
import{join} from "path"
import connectDB from "./config/connectdb.js";
const app = express()

const PORT = process.env.PORT ||3001;
const MONGODB_URL = process.env.MONGODB_URL

// CORS Policy
app.use(cors())

app.use(cookieParser()) /*used for using res.cookie*/

// console.log(join(process.cwd(),"public","css"))
app.use(express.static(join(process.cwd(),"public")))


// solving error in new version
import mongoose from 'mongoose'
mongoose.set('strictQuery', true);

// Database Connection
connectDB(MONGODB_URL)
// Set Template Engine
app.set("view engine",'ejs')


app.use(express.json());
app.use(express.urlencoded({ extended: false}));
// Load Routes
app.use("/", newUser)
app.use("/authuser",authenticateUser,loggeduser)
 

const start =async () => {
    try{
        // await connectDB()
        app.listen(PORT,()=>{
            console.log(`listening at  http://localhost:${PORT}`)
        })
    }catch(err){
        console.log(err)
    } 
}
start()