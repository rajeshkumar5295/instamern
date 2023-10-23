const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
       name:{
           type:String,
           required:true
       },
       username:{
        type:String,
        required:true,
        unique:true,
       },
       email:{
            type:String,
            required:true,
            // unique:true,
       },
       password:{
        type:String,
        required:true,
       }



} ,{timestamps:true} );

  // const userModel= mongoose.model("user",userSchema);
  // module.exports=userModel;
  module.exports=mongoose.model('users',userSchema);