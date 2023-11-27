import mongoose from "mongoose";
import { User } from "../models/user.model.js";

export let dnInstance = undefined;

const connectDB = async ()=>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    
        dnInstance = connection;
    
        console.log(`\n Mongo DB Connected! DB Host: ${connection.connection.host}\n`)
    } catch (error) {
        console.log(`\n Mongo connection error: ${error}\n`)
    }
}

export default connectDB;
