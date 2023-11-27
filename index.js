import express from "express";
import connectDB from "./db/index.js";
import dotenv from 'dotenv';
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import multer from "multer";
import { User } from "./models/user.model.js";

const app = express();
dotenv.config();

const httpServer = createServer(app);

const io = new Server(httpServer, {
    pingTimeout: 60000,
    cors: {
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    },
})

app.set("io", io);

app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get("/api/users", async (req, res)=>{
    const users = await User.find();
    res.status(200);
    res.send(users)
})

app.post("api/user", async (req, res)=>{
    try {
        // console.log("req", req.body);
        const afterCreate = await User.create(req.body);
        res.status(200);
        res.send(afterCreate);

    } catch (error) {
        console.log("error", error);
    }
})

app.listen(process.env.PORT, (err)=>{
    if(!err){
        connectDB();
        console.log(`server is running on ${process.env.PORT}`);
    }else{
        console.log("Error occurred, server can't start", error);
    }
})


