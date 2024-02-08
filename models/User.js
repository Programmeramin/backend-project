import mongoose from "mongoose";

// create user model
const UserSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true
    },

    email : {
        type : String,
        trim : true,
        unique : true,
    },

    phone : {
        type : String,
        trim : true,
        unique : true,
    },

    password : {
        type : String,
        required : true,
    },

    // gender : {
    //     type : String,
    //     enum : ["Male", "Female ", ],
    //     default : false,
    // },

    photo : {
          type : String,
          default : null,
          trim : true,
    },
    
    accessToken : {
      type : String,
      default : null,
      trim : true,
    },

    isActive : {
        type : Boolean,
        default : true,
    },

    status : {
        type : Boolean,
        default : false,
    },

    trash : {
        type : Boolean,
        default : false,
    }

}, {timestamps : true});


// export default
export default mongoose.model("User", UserSchema);