import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongodb ${conn.connection.host}`)
    }catch(err){
        console.log(err);
    }
}

export default connectDB;