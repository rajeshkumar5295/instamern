const userModel = require("../modals/authModel")
const bcrypt=require("bcrypt");
const JWT=require("jsonwebtoken");


 exports.RegisterController=async(req,res)=>{  

    try {    
               
         const {email,username,password,name}=req.body;
         if(!email||!password||!username||!name){
            return res.status(200).json({
                message:"All fields are required"
            })
         }

        const existingUser=await userModel.findOne({$or:[{email:req.body.email},{username:req.body.username}]})
        console.log(existingUser)
            
            if(existingUser){
                return res.status(200).json({
                    message:"user already exist",
                })
            }
            
            const hasahPassword=await bcrypt.hash(req.body.password,10);
                console.log(hasahPassword);
             req.body.password=hasahPassword
        
            const user=await userModel(req.body).save();

            res.status(201).json({
                
                success:true,
                message:"Registered successfully",
                user,
            
            })
        
            
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Error in Register API ",

            error:error.message,
            
        })
    }

}

exports.lognController=async(req,res)=>{  
        try {  

            const {email,password}=req.body;
            if(!email|| !password){
                return res.status(200).json({
                    message:"All fields are required"
                })
            }
            const user=await userModel.findOne({email});
            if(!user){
                return res.status(401).send({ 
                    message:"Invalid user Credentials",

                })
            }

            const comparePassword=await bcrypt.compare(password,user.password);
            if(!comparePassword){
                 return res.status(200).json({
                          message:'Invalid password',
                 })
            }    

            
             const token=JWT.sign({userId:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'1days'} )
            

            res.status(200).json({
                success:true,
                message:'user Login successfully',
                token,
                user,
            })
               
             
        } catch (error) {  
            console.log(error),
            res.status(500).json({
                success:false,
                message:"Error in Login ", 
                error:error.message,

            })
        }

}

exports.middlewareController=(req,res)=>{
      res.status(200).json({
        message:"middleware executed successfully",
      })
}