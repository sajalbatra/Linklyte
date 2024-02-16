import mongoose from "mongoose";
import 'dotenv/config'

const mongodburl=process.env.MONGODB_URI
async function server(){
    try {
        await mongoose.connect(`${mongodburl}`);
        console.log("Connected to MongoDB");
    } catch(error) {
        console.log("Error in connecting to Database", error);
    }
}

export default server;

