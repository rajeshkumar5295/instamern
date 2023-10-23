
const express=require( "express");
const dotenv=require("dotenv")
const cors=require("cors");
const ConnectDB=require("./config/db");

const app=express();

app.use(cors());
dotenv.config();
// console.log(process.env.PORT);

app.use(express.json());  // in Earilear version we have to use body-parser . If we not add this then from controller function error comes like undefine name ,email etc when we heat api


const port=process.env.PORT||8000

ConnectDB();

// Routes
app.use("/api/v1/auth",require("./Routes/authRoutes"))



app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Server setup successfully"
    })
})

app.listen(port,()=>{
      console.log(`server is running on port${port}`)
})