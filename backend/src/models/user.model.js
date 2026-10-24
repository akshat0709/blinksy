import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    clerkId:{
        type:String,
        reuired:true,
        unique:true,
    },
    email:{
        type:String,
        reuired:true,
        unique:true,
    },
    fullName:{
        type:String,
        reuired:true,
    },
    profilePic:{
        type:String,
        default:"",
    },

},{timestamps:true})

//is member since
// createdAt,updatedAt
const User = mongoose.model("User",userSchema)


export default User