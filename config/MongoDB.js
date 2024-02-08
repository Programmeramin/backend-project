import mongoose, { mongo } from "mongoose";

// create mongoDB Connect
const mongoDBConnect = async () =>{

    const Connect = mongoose.connect(process.env.MongoUrl);

    try {
      console.log(`MongoDB Connection Successful`.bgGreen.black);  
    } catch (error) {
        console.log(`MongoDB Connection Failed`.bgRed.white); 
    }
}
 

// export default
export default mongoDBConnect;