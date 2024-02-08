import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import mongoDBConnect from "./config/MongoDB.js";
import userRouter from "./routes/user.js"

// initialize app
const app = express();
dotenv.config();

// env variable
const PORT = process.env.PORT || 9090;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// routing
app.use("/api/v1/user", userRouter) ;

// error handle

// app listen
app.listen(PORT, () =>{
    mongoDBConnect();
    console.log(`Server is running on port ${PORT}`.bgBlue.white);
});