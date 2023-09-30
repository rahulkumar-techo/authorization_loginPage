import mongoose,{Schema,model} from "mongoose";

const userSchema = new Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
phone:{
    type:Number,
    required:true,
    
},
work:{
    type:String
},
password:{
    type:String,
    required:true
},
cpassword:{
    type:String,
    required:true
}


},{timestamps:true});

const User = model("User",userSchema);
export default User;
