//instagram 
const mongoose=require("mongoose");

const ConnectDB=async()=>{
      try {  
            const connc=await mongoose.connect(process.env.MONGO_URL)
            // console.log(connc);
            console.log(`Database connected successfully to ${connc.connection.host} and database port is ${connc.connection.port} ` );
        
      } catch (error) {
                   console.log(error,"Error in connecting database");        
      }
}

module.exports=ConnectDB ;
