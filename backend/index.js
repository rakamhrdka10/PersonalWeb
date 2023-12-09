// index.js

import express from "express";
import cors from "cors";
import routes from './routes/routes.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
app.use(cors({credentials: true, origin: 'http://194.233.93.124:4200'}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'));

app.use(cookieParser());
app.use(routes)

app.listen(4201, ()=>{
    console.log("server up and running");
})