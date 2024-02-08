import express from "express";
import AsyncHandler from "express-async-handler";
import User from "../models/User.js";
import bcrypt from "bcrypt"


/**
 * @description Get all user
 * @method Get
 * @route api/v1/user/
 * @access public
 */


export const getAllUser = AsyncHandler(async(req, res) =>{

const users = await User.find({status : true});

// user check
if(users.length > 0){
    return res.status(200).json({message : "User data loaded"})
}else{
    return res.status(400).json({message : "No data found"});
}


});

/**
 * @description single user
 * @method Get
 * @route api/v1/user/
 * @access public
 */

export const singleUser = AsyncHandler(async(req, res) =>{
 
    });


/**
 * @description create user
 * @method post
 * @route api/v1/user/
 * @access public
 */


export const createUser = AsyncHandler(async(req, res) =>{

    const {name, email , phone, password} = req.body;

    console.log(req.body);

    // // validation
    // if(!name || !email || !phone || !password){
    //     return res.status(400).json({message : "All fields are required"});
    // }

   
 
    // check phone
    const checkPhone = await User.findOne({phone});
    
    if(checkPhone){
        res.status(400).json({message : "Phonn already exist"})
    }

     // check email
     const checkEmail = await User.findOne({email});
    
     if(checkEmail){
         res.status(400).json({message : "Email already exist"})
     }


    // password hass
    const hassPass = await bcrypt.hash(password, 10);


    const user = await User.create({
        name,
        email,
        phone,
        password : hassPass,
    }); 

    res.status(201).json({user : user, message : "data create successful" });
    
    
    });


    /**
 * @description delete user
 * @method delete
 * @route api/v1/user/
 * @access public
 */


  export const DeleteUser = AsyncHandler(async(req, res) =>{

    
    });


 /**
 * @description update user
 * @method delete
 * @route api/v1/user/
 * @access public
 */


  export const updateUser = AsyncHandler(async(req, res) =>{

    
  });