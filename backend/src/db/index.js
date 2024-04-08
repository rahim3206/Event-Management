import dotenv from "dotenv";
import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);   
    } 
    catch (error) {
        console.log("MongoDB Connection failed", error);
        process.exit(1);
    }
};

export default connectDB;