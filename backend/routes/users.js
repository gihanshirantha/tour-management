import  express  from "express";
import { updateUser, deleteUser, getSingleUser,getAllUser } from "../Controllers/userController.js";
import { verifyAdmin, verifyUser } from "../Utils/verifyToken.js";
const router =express.Router()

//update User
router.put("/:id",verifyUser,updateUser);


//Delete User
router.delete("/:id",verifyUser,deleteUser);


//get single User
router.get("/:id",verifyUser, getSingleUser);


//get all  User
router.get("/",verifyAdmin,getAllUser);

export default router;