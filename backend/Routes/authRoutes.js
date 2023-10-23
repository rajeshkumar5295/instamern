const express=require("express");
const { RegisterController, lognController, middlewareController } = require("../controllers/authController");
const authMiddleware = require("../Middleware.js/authMiddleware");

const router=express.Router();


router.post("/register",RegisterController);
router.post("/login",lognController);

router.get("/authmiddleware",authMiddleware,middlewareController)



module.exports=router;

