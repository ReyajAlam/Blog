import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    username:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});

const user = mongoose.model('user',userSchema);
export default user;