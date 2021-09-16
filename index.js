//const express = require("express");
import express from 'express';
//const dotenv = require("dotenv");
import dotenv from "dotenv";
//const cors = require("cors");
import cors from "cors";
import  mongoose from 'mongoose';
import Routes from "./routes/Route.js";
import bodyParser from 'body-parser';
const app = express();
//const mongoose = require("mongoose");
//const Connection = require("./database/db");
//const Routes = require("./routes/Route");

//component 
//const Connection = require('./database/db.js');

const PORT = 8000;

dotenv.config();
app.use(cors());
app.use(bodyParser.json({extented:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("MONGODB connected.....")
})
.catch((err)=>console.log(err))

app.use('/',Routes)

//Connection(process.env.MONGO_URL)

app.listen(PORT, ()=>console.log('server is running.....'))