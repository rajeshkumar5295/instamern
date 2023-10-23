const jwt=require("jsonwebtoken")


module.exports=async(req,res,next)=>{
       try {
            // const token=req.headers["authorization"].split(" ")[1];
            const decode=jwt.verify(req.headers.authorization,process.env.JWT_SECRET_KEY);
            req.user=decode;
            next();
  


            // const token=req.headers.authorization
            //        console.log(token);
            // jwt.verify(token,process.env.JWT_SECRET_KEY,(err,decode)=>{
            //     if(err){
            //         return res.status(401).json({
            //             success:false,
            //             message:"Auth failed",
            //             err,

            //         })
            //     }else{
            //         req.body.userId=decode.userId;
            //         next(); 
            //     }
            // })
       } catch (error) {

        return res.status(401).json({
            success:false,
            error:error.message,
            message:"Authentication failed",
        })
        
       }
}